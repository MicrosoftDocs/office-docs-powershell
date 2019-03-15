---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Start-SPOSiteRename
schema: 2.0.0
author: joseOrtega
ms.author: j0rt3g4
ms.reviewer:
---

# Start-SPOSiteRename

## SYNOPSIS
Starts a job to rename a site. You can change Renames a particular site on a SharePoint Online collection


## SYNTAX
```Powershell
Start-SPOSiteRename [-Identity] <SpoSitePipeBind> [-NewSiteUrl] <string> [[-NewSiteTitle] <string>]
    [[-SuppressMarketplaceAppCheck]] [[-SuppressWorkflow2013Check]] [[-Reserved] <string>] [-WhatIf] [-Confirm]
    [<CommonParameters>]
```


## DESCRIPTION
This command starts a rename of a site on a SharePoint Online site into a new title, name and url. Also allows you to simulate the run using the -WhatIf parameter as well as -SuppressWorkflow2013Check and SuppressMarketplaceAppCheck switch parameters.

## EXAMPLES

### EXAMPLE 1
```powershell
$url="https://<tenant>.sharepoint.com/site/samplesite"
$NewSiteUrl="https://<tenant>.sharepoint.com/site/renamed"
Start-SPOSiteRename -Identity $url -NewSiteUrl $NewSiteUrl
```
Starts the rename of the SPO site with name "samplesite" to "renamed" without modifying the title.

### EXAMPLE 2
```powershell
$url="https://<tenant>.sharepoint.com/site/samplesite"
$NewSiteUrl="https://<tenant>.sharepoint.com/site/renamed"
Start-SPOSiteRename-Identity $url  -NewSiteUrl $NewSiteUrl -NewSiteTitle "New Title"
```
Starts the rename of the SPO site with name "samplesite" to "renamed" modifying the title of the site to "New Title"

### EXAMPLE 3
```powershell
$url="https://<tenant>.sharepoint.com/site/samplesite"
$NewSiteUrl="https://<tenant>.sharepoint.com/site/renamed" 
Start-SPOSiteRename -Identity $url -NewSiteUrl $NewSiteUrl -NewSiteTitle "New Title" -SuppressMarketplaceAppCheck -SuppressWorkflow2013Check -WhatIf
```
Starts the **simulation** rename of the SPO site with name "samplesite" to "renamed" modifying the title of the site to "New Title" without MarketPlaceAppCheck and without WorkFlow2013Check


## PARAMETERS


### -Identity
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewSiteUrl
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: Default
Applicable: SharePoint Online

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewSiteTitle
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuppressMarketplaceAppCheck
PARAMVALUE: SwitchParameter


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuppressWorkflow2013Check
PARAMVALUE: SwitchParameter


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Reserved
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Simulation of what would happend if you run the script without modifying anything.

```yaml
Type: String
Parameter Sets: UrlAndDestinationDataLocation, UrlAndDestinationUrl
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
PARAMVALUE: SwitchParameter


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).



## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Start-SPOUserAndContentMove](Start-SPOUserAndContentMove.md)

[Stop-SPOUserAndContentMove](Stop-SPOUserAndContentMove.md)

[Get-SPOUserAndContentMoveState](Get-SPOUserAndContentMoveState.md)

