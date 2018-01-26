---
external help file: 
applicable: SharePoint Online
title: Start-SPOSiteContentMove
schema: 2.0.0
---

# Start-SPOSiteContentMove

## SYNOPSIS
{{Fill in the Synopsis}}


## SYNTAX

### UrlAndDestinationDataLocation
```
Start-SPOSiteContentMove [-Url] <String> [-DestinationDataLocation] <String>
 [[-PreferredMoveBeginDate] <DateTime>] [[-PreferredMoveEndDate] <DateTime>] [[-Reserved] <String>]
 [-ValidationOnly] [<CommonParameters>]
```

### GroupNameAndDestinationDataLocation
```
Start-SPOSiteContentMove [-GroupName] <String> [-DestinationDataLocation] <String>
 [[-PreferredMoveBeginDate] <DateTime>] [[-PreferredMoveEndDate] <DateTime>] [[-Reserved] <String>]
 [-ValidationOnly] [<CommonParameters>]
```

### UrlAndDestinationUrl
```
Start-SPOSiteContentMove [-Url] <String> [-DestinationUrl] <String> [[-PreferredMoveBeginDate] <DateTime>]
 [[-PreferredMoveEndDate] <DateTime>] [[-Reserved] <String>] [-ValidationOnly] [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}


## EXAMPLES

### ---------------EXAMPLE--------------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}


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
{{Fill Url Description}}


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

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
