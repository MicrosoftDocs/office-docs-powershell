---
external help file: 
applicable: SharePoint Online
title: Start-SPOSiteContentMove
schema: 2.0.0
---

# Start-SPOSiteContentMove

## SYNOPSIS
Start a job to move a particular user or group of users to be moved across geo locations relative to the one that executes the command


## SYNTAX

### UrlAndDestinationDataLocation
```powershell
Start-SPOSiteContentMove [-Url] <String> [-DestinationDataLocation] <String>
 [[-PreferredMoveBeginDate] <DateTime>] [[-PreferredMoveEndDate] <DateTime>] [[-Reserved] <String>]
 [-ValidationOnly] [<CommonParameters>]
```

### GroupNameAndDestinationDataLocation
```powershell
Start-SPOSiteContentMove [-GroupName] <String> [-DestinationDataLocation] <String>
 [[-PreferredMoveBeginDate] <DateTime>] [[-PreferredMoveEndDate] <DateTime>] [[-Reserved] <String>]
 [-ValidationOnly] [<CommonParameters>]
```

### UrlAndDestinationUrl
```powershell
Start-SPOSiteContentMove [-Url] <String> [-DestinationUrl] <String> [[-PreferredMoveBeginDate] <DateTime>]
 [[-PreferredMoveEndDate] <DateTime>] [[-Reserved] <String>] [-ValidationOnly] [<CommonParameters>]
```

## DESCRIPTION
This command starts the information and the status of a move request of a user between sites in a SharePoint Online Multi Geo tenant.


## EXAMPLES

### EXAMPLE 1
```powershell
Start-SPOSiteContentMove -Url $url -DestinationDataLocation $DestLocation -PreferredMoveBeginDate ((Get-Date).AddHour(1)) -PreferredMoveEndDate ((Get-Date).AddHour(12)) 
```
Starts the movement of the content on $url to the destination defined on $DestLocation variable prefered to start 1 hour ahead from now, until 12 hours to that relative time.

### EXAMPLE 2
```powershell
Start-SPOSiteContentMove -GroupName  group@contoso.com -DestinationDataLocation  $destlocation
```
Starts the movement of a group of users called group@contoso.com to the destination location called $destlocation

### EXAMPLE 3
```powershell
Start-SPOSiteContentMove -Url $url -DestinationUrl $destlocation
```
Starts the movement from a $url and set it to the location defined on $destlocation


## PARAMETERS

### -DestinationDataLocation
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: UrlAndDestinationDataLocation, GroupNameAndDestinationDataLocation
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DestinationUrl
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: UrlAndDestinationUrl
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupName
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: GroupNameAndDestinationDataLocation
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredMoveBeginDate
PARAMVALUE: DateTime


```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredMoveEndDate
PARAMVALUE: DateTime


```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 3
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

### -Url
Destination URL where the move will take place


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

### -ValidationOnly
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

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Get-SPOUserAndContentMoveState](Get-SPOUserAndContentMoveState.md)