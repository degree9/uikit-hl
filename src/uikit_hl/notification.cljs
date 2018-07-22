(ns uikit-hl.notification
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(defn notification [opts]
  (.notification js/UIkit (clj->js opts)))

(defn notify! [message & status]
  (notification {:message message :status status}))
