.PHONY: default qwen telegram clean

default: qwen telegram

qwen:
	cd qwen && zip -r ../qwen.xpi .

telegram:
	cd telegram && zip -r ../telegram.xpi .

clean:
	rm -f qwen.xpi telegram.xpi