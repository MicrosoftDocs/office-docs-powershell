---
applicable: Skype for Business Online
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/skype/get-csusersession
schema: 2.0.0
title: Get-CsUserSession
---

# Get-CsUserSession

## SYNOPSIS
Use the Get-CsUserSession cmdlet to retrieve user session information within a specified date range within the past 30 days.

## SYNTAX

```
Get-CsUserSession -StartTime <DateTimeOffset> -User <String> [-EndTime <DateTimeOffset>] [<CommonParameters>]
```

## DESCRIPTION
**Deprecation Notice**: We will be retiring this feature and cmdlet from Skype for Business Online beginning 5/30/2020. Instead, we recommend the utilization of MS Graph Call Records API, which is where we will continue to invest our development resources. For more information, see <https://learn.microsoft.com/graph/api/resources/callrecords-api-overview?view=graph-rest-beta>.

Use the Get-CsUserSession cmdlet to retrieve session information for users within a specified date range within the past 30 days.

You have to be assigned Skype For Business admin role to run this cmdlet.

## EXAMPLES

### Example 1
```
Get-CsUserSession -User "Ken.Myer@Contoso.com" -StartTime "02/22/2016 07:30:15 PM"
```

This example returns user session information for Ken Myer from "02/22/2016 07:30:15 PM" to the current date.

## PARAMETERS

### -EndTime

> Applicable: Skype for Business Online

Specifies the end date, time and offset of the date range.

```yaml
Type: DateTimeOffset
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTime

> Applicable: Skype for Business Online

Specifies the start date, time and offset of the date range.

```yaml
Type: DateTimeOffset
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User

> Applicable: Skype for Business Online

Specifies the user whose session data will be retrieved.
The input format is any form of user URI defined in Skype for Business Online.
For instance: `-User "Ken.Myer@Contoso.com"`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Data.UserSession
The Get-CsUserSession cmdlet returns an instance of the Microsoft.Rtc.Management.Hosted.Data.UserSession object.

## NOTES

## RELATED LINKS
