package expo.modules.pontuadetecttime

import android.content.Context
import android.provider.Settings
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class PontuaDetectTimeModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("PontuaDetectTime")

    Function("getTheme") {
      return@Function "systemDESIGNSYSTEM"
    }

    Function("isAutoDateTimeEnabled") {
      val context: Context = requireNotNull(appContext.reactContext) {
        "Context is null, ensure the module is properly initialized."
      }
      val autoDateTime = Settings.Global.getInt(context.contentResolver, Settings.Global.AUTO_TIME, 0)
      return@Function autoDateTime == 1
    }

    Function("isAutoTimeZoneEnabled") {
      val context: Context = requireNotNull(appContext.reactContext) {
        "Context is null, ensure the module is properly initialized."
      }
      val autoTimeZone = Settings.Global.getInt(context.contentResolver, Settings.Global.AUTO_TIME_ZONE, 0)
      return@Function autoTimeZone == 1
    }
  }
}
