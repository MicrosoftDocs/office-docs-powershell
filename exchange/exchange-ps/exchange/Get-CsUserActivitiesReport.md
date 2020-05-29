---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-csuseractivitiesreport
applicable: Exchange Online
title: Get-CsUserActivitiesReport
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-CsUserActivitiesReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

This cmdlet was deprecated in January, 2018. For information about the available replacement Microsoft Graph reports in Office 365, see the subtopics of [Working with Office 365 usage reports in Microsoft Graph](https://go.microsoft.com/fwlink/p/?LinkID=865135).

Use the Get-CsUserActivitiesReport cmdlet to view number and type of activities that a use participated in while connected to Skype for Business Online in your cloud-based organization.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Get-CsUserActivitiesReport [-EndDate <DateTime>] [-ResultSize <Unlimited>] [-StartDate <DateTime>] [-UserName <String>] [<CommonParameters>]
```

## DESCRIPTION
You can use the Get-CsUserActivitiesReport to query information about activities in Skype for Business Online by all users or a specified user for the last 3 months. For the reporting period you specify, the cmdlet returns the following information:

- UserName

- LastLogonTime

- LastActivityTime

- TotalP2PSessions

- TotalP2PIMSessions

- TotalP2PAudioSessions

- TotalP2PVideoSessions

- TotalP2PApplicationSharingSessions

- TotalP2PAudioSessionMinutes

- TotalP2PVideoSessionMinutes

- TotalOrganizedConferences

- TotalOrganizedIMConferences

- TotalOrganizedAVConferences

- TotalOrganizedApplicationSharingConferences

- TotalOrganizedWebConferences

- TotalOrganizedDialInConferences

- TotalOrganizedAVConferenceMinutes

- TotalParticipatedConferences

- TotalParticipatedIMConferences

- TotalParticipatedAVConferences

- TotalParticipatedApplicationSharingConferences

- TotalParticipatedWebConferences

- TotalParticipatedDialInConferences

- TotalParticipatedAVConferenceMinutes

- TotalPlacedPSTNCalls

- TotalReceivedPSTNCalls

- TotalPlacedPSTNCallMinutes

- TotalReceivedPSTNCallMinutes

- TotalMessages

- TotalTransferredFiles

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/exchange-server/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-CsUserActivitiesReport -StartDate 01/01/2015 -EndDate 01/31/2015
```

This example shows the activity for all users for the month of January.

## PARAMETERS

### -EndDate
The EndDate parameter specifies the end date of the date range.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserName
The UserName parameter filters the results by user. You identify the user by their account (for example, laura@contoso.com).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
