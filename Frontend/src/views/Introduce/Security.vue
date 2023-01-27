<template>
  <div>
    <div class="lg:px-52 lg:border-t-0 border-t-2 mt-3 lg:mt-8">
      <div class="intro-y flex mt-3 lg:mt-0 items-center">
        <div class="flex cursor-pointer" @click="router.push('/')">
          <HomeIcon class="w-5 h-5 mt-0.5"></HomeIcon>
          <h2 class="text-lg mx-2 hover:text-lime-500">Trang chủ</h2>
        </div>
        <span>--></span>
        <h2 class="text-lg ml-2 text-lime-500">Chính sách bảo mật</h2>
      </div>
      <!-- BEGIN: Page Transport -->
      <div class="intro-y py-3">
        <h1 class="lg:text-3xl text-2xl lg:mt-4 mt-2 font-medium">
          Chính sách bảo mật
        </h1>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          1. CHÍNH SÁCH BẢO MẬT
        </h2>
        <p class="mt-2 text-lg lg:text-base">
          Khi khách hàng sử dụng dịch vụ tại website Fresh-Garden, chúng tôi sẽ
          đảm bảo quyền riêng tư của người dùng theo những điều khoản dưới đây.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          2. SỬ DỤNG THÔNG TIN
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          Fresh-Garden chỉ dùng thông tin của người dùng để phục vụ cho chính
          người dùng khi bạn sử dụng dịch vụ tại Fresh-Garden. Vì vậy chúng tôi
          sẽ dùng thông tin cá nhân của bạn để:
        </p>
        <p class="mt-3 text-lg lg:text-base">
          + Xác minh danh tính của người sử dụng dịch vụ
        </p>
        <p class="mt-3 text-lg lg:text-base">+ Xác nhận thanh toán</p>
        <p class="mt-3 text-lg lg:text-base">
          + Những hình thức sử dụng để chia sẻ thông tin của bạn với các công ty
          khác bao gồm (nhưng không giới hạn) như công ty thẻ tín dụng hoặc tổ
          chức ngân hàng... nhằm mục đích phục vụ giao dịch của bạn
        </p>
        <p class="mt-3 text-lg lg:text-base">
          + Cung cấp các dịch vụ hỗ trợ & chăm sóc khách hàng. Nâng cấp dịch vụ
          của chúng tôi;
        </p>
        <p class="mt-3 text-lg lg:text-base">
          + Thực hiện giao dịch thanh toán & gửi các thông báo trong quá trình
          giao dịch;
        </p>
        <p class="mt-3 text-lg lg:text-base">
          + Xử lý khiếu nại, thu phí & giải quyết sự cố;
        </p>
        <p class="mt-3 text-lg lg:text-base">
          + Gửi bạn các thông tin về chương trình Marketing, các thông báo &
          chương trình khuyến mại;
        </p>
        <p class="mt-3 text-lg lg:text-base">
          + So sánh độ chính xác của thông tin cá nhân của bạn trong quá trình
          kiểm tra với bên thứ ba.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          3. HẠN CHẾ CÔNG BỐ THÔNG TIN
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          Chúng tôi sẽ không bán, tiết lộ hoặc cho thuê cho bên thứ ba nhận dạng
          cá nhân người sử dụng có thông tin thu thập tại trang web của chúng
          tôi, thông qua các máy chủ của chúng tôi, ngoài việc cung cấp dịch vụ
          của chúng tôi và như trong chính sách bảo mật.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          4. MẬT KHẨU VÀ THÔNG TIN BÍ MẬT CỦA CHÚNG TÔI
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          Chúng tôi yêu cầu bạn không tiết lộ hoặc chia sẻ mật khẩu hoặc các
          thông tin nhận dạng khác mà chúng tôi cung cấp cho bạn với bất cứ một
          ai khác, kể cả nhân viên của Fresh-Garden. Mật khẩu và thông tin là
          tài sản của chúng tôi và việc sử dụng của bạn có thể bị thu hồi theo
          quyết định của chúng tôi. Bạn cũng bị cấm sử dụng bất kỳ mật khẩu nào
          khác mà nó không phải là mật khẩu tài khoản của bạn.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          5. THU THẬP THÔNG TIN
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          Fresh-Garden sẽ thu thập các thông tin bao gồm (nhưng không giới hạn)
          sau đây để đảm bảo an toàn cho giao dịch: địa chỉ IP, loại trình duyệt
          web, các trang bạn truy cập trong quá trình sử dụng dịch vụ tại
          Fresh-Garden, thông tin về máy tính, thiết bị mạng, ...
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Trong một số dịch vụ, chúng tôi sẽ yêu cầu bạn cung cấp trung thực và
          chính xác những thông tin sau:
        </p>
        <p class="mt-3 text-lg lg:text-base">
          + Thông tin nhân thân và liên hệ (đối với tổ chức và cá nhân) như:
          tên, ngày sinh, giới tính, địa chỉ, điện thoại, địa chỉ thư trực tuyến
          (email), giấy tờ hợp pháp (như Chứng minh nhân dân, Giấy phép kinh
          doanh, mã số thuế, ...)
        </p>
        <p class="mt-3 text-lg lg:text-base">
          + Thông tin tài chính như số tài khoản ngân hàng, số thẻ ghi nợ hoặc
          thẻ tín dụng, …
        </p>
        <p class="mt-3 text-lg lg:text-base">
          + Trong một số trường hợp, chúng tôi có thể thu thập thêm thông tin về
          bạn từ bên thứ ba như ngân hàng, các tổ chức tín dụng và dịch vụ thanh
          toán, ...
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Chúng tôi cũng có thể thu thập thêm các thông tin khác về bạn từ nhiều
          nguồn và bằng các phương thức khác nhằm đảm bảo chất lượng dịch vụ và
          phục vụ bạn tốt hơn.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          6. CHIA SẺ THÔNG TIN VỚI BÊN THỨ BA
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          Chúng tôi có thể chia sẻ hoặc nhận thông tin cá nhân của bạn với/ từ:
        </p>
        <p class="mt-3 text-lg lg:text-base">
          + Các đơn vị ký hợp đồng làm dịch vụ cho chúng tôi trong phạm vi hoạt
          động của Fresh-Garden, ví dụ: chống gian lận, tiếp thị, công nghệ. Hợp
          đồng của chúng tôi luôn quy định rằng những nhà thầu đó không được sử
          dụng thông tin cá nhân của bạn vào mục đích nào khác ngoài phạm vi hợp
          đồng hoặc cho lợi ích riêng của họ.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          + Các cơ quan thực thi pháp luật hoặc cơ quan công quyền có thẩm
          quyền, hoặc các bên thứ ba khác trong các trường hợp;
        </p>
        <p class="mt-3 text-lg lg:text-base">
          + Có yêu cầu của tòa án hoặc các thủ tục pháp lý tương tự;
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Chúng tôi buộc phải làm vậy để tuân thủ các quy định của pháp luật;
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Chúng tôi tin rằng việc tiết lộ thông tin cá nhân của bạn là cần thiết
          để ngăn chặn thiệt hại về vật chất hoặc tài chính, để báo cáo những
          hành vi nghi ngờ là phạm pháp hoặc để điều tra những vi phạm chính
          sách "Thỏa thuận người dùng"
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Bất kỳ bên thứ ba nào khác nếu được sự đồng ý của bạn.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          7. ĐẶT COOKIE
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          Khi bạn truy cập Fresh-Garden, chúng tôi hoặc bên thứ ba được thuê để
          giám sát hoặc thống kê hoạt động của trang web sẽ đặt một số tập tin
          (file) dữ liệu nhỏ gọi là Cookie lên bộ nhớ máy tính của bạn.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Một trong số những Cookie này có thể tồn tại lâu để thuận tiện cho bạn
          trong quá trình sử dụng, ví dụ: lưu địa chỉ thư trực tuyến (Email) của
          bạn trong trang đăng nhập để bạn không phải nhập lại, ...
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Chúng tôi sẽ mã hóa các tập tin Cookies để đảm bảo tính bảo mật, bạn
          có thể không cho phép dùng Cookies trên trình duyệt của mình nhưng
          điều này có thể ảnh hưởng đến quá trình sử dụng dịch vụ của bạn trên
          trang website.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          8. LƯU TRỮ VÀ BẢO VỆ THÔNG TIN
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          Chúng tôi lưu trữ và xử lý thông tin cá nhân của bạn tại máy chủ đặt
          tại các trung tâm dữ liệu trên lãnh thổ Việt Nam.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Với sự hiểu biết rằng an ninh hoàn hảo không tồn tại trên môi trường
          mạng (internet), chúng tôi sử dụng công nghệ tiêu chuẩn để bảo vệ
          thông tin người dùng của chúng tôi, bao gồm tường lửa, các lớp khóa
          bảo mật, mã hóa dữ liệu. Chúng tôi cũng có các biện pháp an ninh thích
          hợp tại chỗ trong cơ sở vật chất của chúng tôi để bảo vệ sự riêng tư
          về thông tin cá nhân của bạn. Vì vậy, khi chúng tôi sử dụng các biện
          pháp an ninh hợp lý, chúng tôi không chịu trách nhiệm về bất kỳ sự mất
          mát hoặc tiết lộ thông tin của bạn. Ngoài ra, chúng tôi không chịu
          trách nhiệm về công bố thông tin của bạn bởi các đối tác của chúng tôi
          hoặc của các công ty khác mà họ không thuộc quyền kiểm soát của chúng
          tôi.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          9. THAY ĐỔI THÔNG TIN
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          Chúng tôi cho phép người dùng thay đổi, điều chỉnh thông tin trong tài
          khoản người dùng. Bạn có thể thay đổi thông tin cá nhân của mình bất
          kỳ lúc nào bằng cách sử dụng chức năng tương ứng.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Chúng tôi có quyền giữ lại các thông tin sau khi bạn đã vô hiệu hoá
          tài khoản của bạn hoặc thông tin mà bạn đã yêu cầu được lấy đi để thực
          hiện theo luật pháp, giải quyết tranh chấp và thực thi quyền của chúng
          tôi.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          10. SỬA ĐỔI CHÍNH SÁCH BẢO MẬT
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          Chúng tôi có quyền sửa đổi chính sách bảo mật này theo thời gian mà
          không cần thông báo cho bạn. Nếu tại bất kỳ thời gian chúng tôi quyết
          định thay đổi đáng kể cách thức mà chúng tôi thu thập hoặc sử dụng
          thông tin cá nhân, chúng tôi sẽ thông báo cho các thành viên của chúng
          tôi bằng cách đăng thông báo nổi bật trên trang chủ của chúng tôi. Tuy
          nhiên, thông tin cá nhân của bạn sẽ luôn luôn được sử dụng theo chính
          sách bảo mật có hiệu lực tại thời điểm thông tin được thu thập.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Nếu bạn có bất kỳ ý kiến muốn chia sẻ với chúng tôi về chính sách bảo
          mật của chúng tôi.
        </p>
      </div>
      <!-- END: Page Transport -->
    </div>
    <bottom />
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import bottom from "../../views/Footer/Footer.vue";
export default {
  name: "Introduce",
  components: { bottom },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
};
</script>

<style></style>
