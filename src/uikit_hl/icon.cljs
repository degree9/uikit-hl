(ns uikit-hl.icon
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]
            ["uikit/dist/js/uikit-icons" :as icons]))

;; Init UIkit Icons ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(.use uk/uikit icons)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti uk-icon! h/kw-dispatcher :default ::default)

(defn format-icon [icon]
  (str "uk-icon-" icon))

(defmethod h/do! ::default
  [elem kw v]
  (uk-icon! elem kw v))

(defmethod uk-icon! ::default
  [elem kw v]
  (h/do! elem :class {(format-icon (name kw)) v}))

(defmethod uk-icon! ::icon
  [elem kw v]
  (uk/icon elem v))

(h/defelem icon [{:keys [link button image] :as attr} kids]
  (let [icon (select-keys attr [:icon :ratio])]
    (prn link button image attr icon)
    (h/span
      (dissoc attr :link :button :image :icon :ratio)
      ::icon   icon
      ::link   link
      ::button button
      ::image  image)))
