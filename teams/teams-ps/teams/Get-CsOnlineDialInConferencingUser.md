---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinedialinconferencinguser
applicable: Microsoft Teams
title: Get-CsOnlineDialInConferencingUser
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsOnlineDialInConferencingUser

## SYNOPSIS
Use the `Get-CsOnlineDialInConferencingUser` cmdlet to view the properties and settings of users that are enabled for dial-in conferencing and are using Microsoft as their PSTN conferencing provider.

## SYNTAX

```
Get-CsOnlineDialInConferencingUser [[-Identity] <UserIdParameter>] [-ResultSize <Int32>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet will only return users that have been enabled for audio conferencing using Microsoft as the audio conferencing provider.
Users that are enabled for audio conferencing using a third-party audio conferencing provider won't be returned.
If there are no users in the organization that have been enabled for audio conferencing, then the cmdlet will return no results.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Get-CsOnlineDialInConferencingUser -Identity Ken.Myer@contoso.com
```

This example uses the User Principal Name (UPN) to retrieve the BridgeID and ServiceNumber information.

## PARAMETERS

### -Identity
Specifies the user to retrieve.
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

### -ResultSize
Enables you to limit the number of records returned by the cmdlet.
For example, to return seven users (regardless of the number of users that are in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven users will be returned.
The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.
If you set the ResultSize to 7 but you have only three users in your forest, the command will return those three users, and then complete without error.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
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

[Set-CsOnlineDialInConferencingUser](https://learn.microsoft.com/powershell/module/teams/set-csonlinedialinconferencinguser)
