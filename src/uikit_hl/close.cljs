(ns uikit-hl.close
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-close* "")

(defmethod hl/do! :uk-close
  [elem _ v]
  (.close js/UIkit elem (clj->js v)))
