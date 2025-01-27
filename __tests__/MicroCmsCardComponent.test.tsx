import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MicroCmsCard from "../app/components/MicroCmsCard";

describe("MicroCmsCard component", () => {
  const mockItem = {
    id: "123",
    title: "エンジニアに必須のスキル",
    date: "2021-12-31",
    url: "https://example.com",
    thumbnail: {
      url: "https://example.com/image.jpg",
    },
    body: "エンジニアに必須のスキルは...",
  };

  it("記事のタイトルがあること", () => {
    render(<MicroCmsCard key={mockItem.id} item={mockItem} />);
    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("エンジニアに必須のスキル");
  });

  it("サムネイルが表示されていること", () => {
    render(<MicroCmsCard key={mockItem.id} item={mockItem} />);
    const thumbnail = screen.getByTestId("thumbnail");
    expect(thumbnail).toBeInTheDocument();
    expect(thumbnail).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  it("記事を見るボタンがあること", () => {
    render(<MicroCmsCard key={mockItem.id} item={mockItem} />);
    const nextButton = screen.getByTestId("next-button");
    expect(nextButton).toHaveTextContent("記事を見る");
  });

  it("ボタンをクリックすると個別のページに遷移すること", () => {
    render(<MicroCmsCard key={mockItem.id} item={mockItem} />);
    const nextButton = screen.getByTestId("next-button");
    expect(nextButton).toHaveAttribute('href', `blogs/${mockItem.id}`);
  });
});
