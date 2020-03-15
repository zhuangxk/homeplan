"use strict";
App({
    globalData: {
        ColorList: [{
                title: '嫣红',
                name: 'red',
                color: '#e54d42'
            },
            {
                title: '桔橙',
                name: 'orange',
                color: '#f37b1d'
            },
            {
                title: '明黄',
                name: 'yellow',
                color: '#fbbd08'
            },
            {
                title: '橄榄',
                name: 'olive',
                color: '#8dc63f'
            },
            {
                title: '森绿',
                name: 'green',
                color: '#39b54a'
            },
            {
                title: '天青',
                name: 'cyan',
                color: '#1cbbb4'
            },
            {
                title: '海蓝',
                name: 'blue',
                color: '#0081ff'
            },
            {
                title: '姹紫',
                name: 'purple',
                color: '#6739b6'
            },
            {
                title: '木槿',
                name: 'mauve',
                color: '#9c26b0'
            },
            {
                title: '桃粉',
                name: 'pink',
                color: '#e03997'
            },
            {
                title: '棕褐',
                name: 'brown',
                color: '#a5673f'
            },
            {
                title: '玄灰',
                name: 'grey',
                color: '#8799a3'
            },
            {
                title: '草灰',
                name: 'gray',
                color: '#aaaaaa'
            },
            {
                title: '墨黑',
                name: 'black',
                color: '#333333'
            },
            {
                title: '雅白',
                name: 'white',
                color: '#ffffff'
            }
        ]
    },
    onLaunch: function () {
        var _this = this;
        wx.getSystemInfo({
            success: function (e) {
                _this.globalData.StatusBar = e.statusBarHeight;
                var capsule = wx.getMenuButtonBoundingClientRect();
                if (capsule) {
                    _this.globalData.Custom = capsule;
                    _this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
                }
                else {
                    _this.globalData.CustomBar = e.statusBarHeight + 50;
                }
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUU7UUFDVixTQUFTLEVBQUUsQ0FBQztnQkFDVixLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsS0FBSztnQkFDWCxLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7U0FDQTtLQUNGO0lBQ0QsUUFBUTtRQUFSLGlCQStDQztRQWJDLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDZixPQUFPLEVBQUUsVUFBQSxDQUFDO2dCQUNSLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQzlDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDO2dCQUNuRCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7b0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO2lCQUM5RTtxQkFBTTtvQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztpQkFDcEQ7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBRUosQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xuQXBwPElBcHBPcHRpb24+KHtcbiAgZ2xvYmFsRGF0YTogeyBcbiAgICBDb2xvckxpc3Q6IFt7XG4gICAgICB0aXRsZTogJ+Wro+e6oicsXG4gICAgICBuYW1lOiAncmVkJyxcbiAgICAgIGNvbG9yOiAnI2U1NGQ0MidcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn5qGU5qmZJyxcbiAgICAgIG5hbWU6ICdvcmFuZ2UnLFxuICAgICAgY29sb3I6ICcjZjM3YjFkJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICfmmI7pu4QnLFxuICAgICAgbmFtZTogJ3llbGxvdycsXG4gICAgICBjb2xvcjogJyNmYmJkMDgnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ+aphOamhCcsXG4gICAgICBuYW1lOiAnb2xpdmUnLFxuICAgICAgY29sb3I6ICcjOGRjNjNmJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICfmo67nu78nLFxuICAgICAgbmFtZTogJ2dyZWVuJyxcbiAgICAgIGNvbG9yOiAnIzM5YjU0YSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn5aSp6Z2SJyxcbiAgICAgIG5hbWU6ICdjeWFuJyxcbiAgICAgIGNvbG9yOiAnIzFjYmJiNCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn5rW36JOdJyxcbiAgICAgIG5hbWU6ICdibHVlJyxcbiAgICAgIGNvbG9yOiAnIzAwODFmZidcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn5ae557SrJyxcbiAgICAgIG5hbWU6ICdwdXJwbGUnLFxuICAgICAgY29sb3I6ICcjNjczOWI2J1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICfmnKjmp78nLFxuICAgICAgbmFtZTogJ21hdXZlJyxcbiAgICAgIGNvbG9yOiAnIzljMjZiMCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn5qGD57KJJyxcbiAgICAgIG5hbWU6ICdwaW5rJyxcbiAgICAgIGNvbG9yOiAnI2UwMzk5NydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn5qOV6KSQJyxcbiAgICAgIG5hbWU6ICdicm93bicsXG4gICAgICBjb2xvcjogJyNhNTY3M2YnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ+eOhOeBsCcsXG4gICAgICBuYW1lOiAnZ3JleScsXG4gICAgICBjb2xvcjogJyM4Nzk5YTMnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ+iNieeBsCcsXG4gICAgICBuYW1lOiAnZ3JheScsXG4gICAgICBjb2xvcjogJyNhYWFhYWEnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ+WiqOm7kScsXG4gICAgICBuYW1lOiAnYmxhY2snLFxuICAgICAgY29sb3I6ICcjMzMzMzMzJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICfpm4Xnmb0nLFxuICAgICAgbmFtZTogJ3doaXRlJyxcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZidcbiAgICB9XG4gICAgXVxuICB9LFxuICBvbkxhdW5jaCgpIHtcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcbiAgICAvLyBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuICAgIC8vIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIC8vIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcblxuICAgIC8vIOeZu+W9lVxuICAgIC8vIHd4LmxvZ2luKHtcbiAgICAvLyAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxuICAgIC8vICAgICAvLyDlj5HpgIEgcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuICAgIC8vICAgfSxcbiAgICAvLyB9KVxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgIC8vIHd4LmdldFNldHRpbmcoe1xuICAgIC8vICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAvLyAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgIC8vICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcbiAgICAvLyAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgLy8gICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgIC8vICAgICAgICAgICAvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG4gICAgLy8gICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuXG4gICAgLy8gICAgICAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgLy8gICAgICAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAvLyAgICAgICAgICAgaWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKVxuICAgIC8vICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0sXG4gICAgLy8gfSlcblxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5TdGF0dXNCYXIgPSBlLnN0YXR1c0JhckhlaWdodDtcbiAgICAgICAgbGV0IGNhcHN1bGUgPSB3eC5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChjYXBzdWxlKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLkN1c3RvbSA9IGNhcHN1bGU7XG4gICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLkN1c3RvbUJhciA9IGNhcHN1bGUuYm90dG9tICsgY2Fwc3VsZS50b3AgLSBlLnN0YXR1c0JhckhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEuQ3VzdG9tQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQgKyA1MDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgXG4gIH0sXG59KSJdfQ==