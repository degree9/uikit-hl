(ns uikit-hl.close
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]
            ["uikit" :as uikit]))

(def ^:dynamic *uk-close* "")

(defmethod hl/do! :uk-close
  [elem _ v]
  (.close uikit elem (clj->js v)))
