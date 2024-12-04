---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlinedialinconferencinguser
applicable: Microsoft Teams
title: Set-CsOnlineDialInConferencingUser
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Set-CsOnlineDialInConferencingUser

## SYNOPSIS

Use the `Set-CsOnlineDialInConferencingUser` cmdlet to modify the properties of a user that has been enabled for Microsoft's audio conferencing service.

## SYNTAX

### TenantIdParams (Default)
```
Set-CsOnlineDialInConferencingUser [-Identity] <UserIdParameter>
 [-BridgeId <Guid>]
 [-BridgeName <String>]
 [-Confirm]
 [-Force]
 [-ResetLeaderPin]
 [-SendEmailFromAddress <String>]
 [-SendEmailFromDisplayName <String>]
 [-SendEmailToAddress <String>]
 [-SendEmail]
 [-ServiceNumber <String>]
 [-TollFreeServiceNumber <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The `Set-CsOnlineDialInConferencingUser` cmdlet is used to modify properties for a Microsoft audio conferencing user.
This cmdlet will not work for users with third-party conferencing providers.
The cmdlet will verify that the correct license is assigned to the user.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOnlineDialInConferencingUser -Identity "Ken Meyers" -ResetLeaderPin -ServiceNumber 14255037265
```

This example shows how to reset the meeting leader's PIN and set the audio conferencing provider default meeting phone number.

### -------------------------- Example 2 --------------------------
```
Set-CsOnlineDialInConferencingUser -Identity "Ken Meyers" -BridgeName "Conference Bridge"
```

This example sets a user's conference bridge assignment.

## PARAMETERS

### -Identity
Specifies the Identity of the user account to be to be modified.
A user identity can be specified by using one of the formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's object id.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BridgeId
Specifies the globally-unique identifier (GUID) for the audio conferencing bridge.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BridgeName
Specifies the name of the audio conferencing bridge.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetLeaderPin
Specifies whether to reset the meeting organizer or leaders PIN for meetings.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendEmail
Send an email to the user containing their Audio Conference information.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendEmailFromAddress
You can specify the From Address to send the email that contains the Audio Conference information. This parameter must be used together with -SendEmailFromDisplayName and -SendEmail.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendEmailFromDisplayName
You can specify the Display Name to send the email that contains the Audio Conference information. This parameter must be used together with -SendEmailFromAddress and -SendEmail.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendEmailToAddress
You can specify the To Address to send the email that contains the Audio Conference information. This parameter must be used together with -SendEmail.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceNumber
Specifies the default service number for the user.
The default number is used in meeting invitations.
The cmdlet will verify that the service number is assigned to the user's current conference bridge, or the one the user is being assigned to.

The service number can be specified in the following formats: E.164 number, +\<E.164 number\> and tel:\<E.164 number\>.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TollFreeServiceNumber
Specifies a toll-free phone number to be used by the user. This number is then used in meeting invitations. The toll-free number can be specified in the following formats: E.164 number, +\<E.164 number\> and tel:\<E.164 number\>.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf parameter is not implemented for this cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsaudioconferencingpolicy)

[New-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsaudioconferencingpolicy)
