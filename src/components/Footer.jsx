export default function Footer() {
  return (
    <div className="border-t">
      <div className="base-container flex justify-center py-3">
        <div className="flex items-center gap-1">
          Powered by
          <a
            className="font-medium tracking-wide hover:underline"
            target="blank"
            href="https://json-api.uz/"
          >
            JSON API
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
