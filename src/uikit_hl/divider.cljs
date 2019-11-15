(ns uikit-hl.divider
  (:require [hoplon.core :as h]
            [hoplon.jquery]))

(defn- format-divider [divider]
  (str "uk-divider-" divider))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-divider (name kw)) v})

  (h/defelem divider [{:keys [icon small vertical] :as attr} kids]
    (h/hr
      (dissoc attr :icon :small :vertical)
      ::icon     icon
      ::small    small
      ::vertical vertical
      kids)))
