---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/new-csteamsemergencycallingextendednotification 
applicable: Microsoft Teams
title: New-CsTeamsEmergencyCallingExtendedNotification 
author: jenstrier
ms.author: jenstr
manager: roykuntz
ms.reviewer:
schema: 2.0.0
---

# New-CsTeamsEmergencyCallingExtendedNotification

## SYNOPSIS

## SYNTAX

```
New-CsTeamsEmergencyCallingExtendedNotification -EmergencyDialString <string> [-NotificationGroup <string>] 
 [-NotificationDialOutNumber <string>] [-NotificationMode <string>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet supports creating specific emergency calling notification settings per emergency phone numbers. Used with TeamsEmergencyCallingPolicy.

## EXAMPLES

### Example 1
```powershell
PS C:>  $en1 = New-CsTeamsEmergencyCallingExtendedNotification -EmergencyDialString "911" -NotificationGroup "alert2@contoso.com" -NotificationMode ConferenceUnMuted
```

Creates an extended emergency calling notfication for emergency phone number 911 and stores it in the variable $en1. The variable should afterwards be added to a TeamsEmergencyCallingPolicy instance.
 
## PARAMETERS

### -EmergencyDialString
Specifies the emergency phone number.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationGroup
NotificationGroup is a email list of users and groups to be notified of an emergency call. Individual users or groups are separated by ";", for instance "group1@contoso.com;group2@contoso.com". A maximum of 50 users can be notified.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationDialOutNumber
This parameter represents the PSTN number which can be dialed out if NotificationMode is set to either of the two Conference values.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationMode
The type of conference experience for security desk notification. Support for the ConferenceUnMuted mode is pending.

```yaml
Type: Microsoft.Rtc.Management.WritableConfig.Policy.Teams.NotificationMode
Parameter Sets: (All)
Aliases:
Accepted values: NotificationOnly, ConferenceMuted, ConferenceUnMuted

Required: False
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

### System.Object
## NOTES

## RELATED LINKS

[Set-CsTeamsEmergencyCallingPolicy](Set-CsTeamsEmergencyCallingPolicy.md)

[New-CsTeamsEmergencyCallingPolicy](New-CsTeamsEmergencyCallingPolicy.md)
