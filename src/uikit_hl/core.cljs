(ns uikit-hl.core
  (:refer-clojure :exclude [filter])
  (:require ["uikit" :as uk]
            [hoplon.core :as h]))

(def uikit uk)

(defn accordion [elem & [opts]]
  (.accordion uikit elem (clj->js opts)))

(defn alert [elem & [opts]]
  (.alert uikit elem (clj->js opts)))

(defn dropdown [elem & [opts]]
  (.dropdown uikit elem (clj->js opts)))

(defn filter [elem & [opts]]
  (.filter uikit elem (clj->js opts)))

(defn formCustom [elem & [opts]]
  (.formCustom uikit elem (clj->js opts)))

(defn grid [elem & [opts]]
  (.grid uikit elem (clj->js opts)))

(defn heightMatch [elem & [opts]]
  (.heightMatch uikit elem (clj->js opts)))

(defn heightViewport [elem & [opts]]
  (.heightViewport uikit elem (clj->js opts)))

(defn icon [elem & [opts]]
  (.icon uikit elem (clj->js opts)))

(defn margin [elem & [opts]]
  (.margin uikit elem (clj->js opts)))

(defn modal [elem & [opts]]
  (.modal uikit elem (clj->js opts)))

(defn nav [elem & [opts]]
  (.nav uikit elem (clj->js opts)))

(defn navbar [elem & [opts]]
  (.navbar uikit elem (clj->js opts)))

(defn notification [& [opts]]
  (.notification uikit (clj->js opts)))

(defn offcanvas [elem & [opts]]
  (.offcanvas uikit elem (clj->js opts)))

(defn slider [elem & [opts]]
  (.slider uikit elem (clj->js opts)))

(defn tab [elem & [opts]]
  (.tab uikit elem (clj->js opts)))

(defn toggle [elem & [opts]]
  (.toggle uikit elem (clj->js opts)))

(defn tooltip [elem & [opts]]
  (.tooltip uikit elem (clj->js opts)))
