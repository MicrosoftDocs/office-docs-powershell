---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/disable-csonlinedialinconferencinguser
applicable: Skype for Business Online
title: Disable-CsOnlineDialInConferencingUser
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Disable-CsOnlineDialInConferencingUser

## SYNOPSIS
Use the `Disable-CsOnlineDialInConferencingUser` cmdlet to prevent a Skype for Business Online user from using dial-in or audio conferencing through Skype for Business Online.

## SYNTAX

```
Disable-CsOnlineDialInConferencingUser [-WhatIf] [-SendEmailFromDisplayName <String>] [-TenantDomain <String>]
 [-SendEmailToAddress <String>] [-SendEmailFromAddress <String>] [-Confirm] [-SendEmail] [[-Identity] <UserIdParameter>]
 [-Tenant <Guid>] [-DomainController <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
The `Disable-CsOnlineDialInConferencingUser` cmdlet validates that the user is provisioned for audio conferencing using Microsoft as the audio conferencing provider and then disables audio conferencing which prevents the user from setting up audio conferences or meetings.

When a user is disabled, the conference ID or passcode that was assigned to the user is released so it can be used by another user that is enabled for dial-in or audio conferencing even if they have a license assigned to them.

When you disable the user for audio conferencing using this cmdlet, it will check that the user belongs to the specified tenant or domain and any audio conferencing information is removed.

If the user is enabled for a third-party audio conferencing provider (ACP) and the Active Directory information is set, the cmdlet will fail and you must use the Remove-CsUserACP cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Disable-CsOnlineDialInConferencingUser -Identity "Pilar Ackerman" -Confirm
```

This example disables user "Pilar Ackerman" from using audio conferencing and will prompt you to confirm the operation.


## PARAMETERS

### -Identity
Specifies the identity of the user account that will be disabled for Skype for Business Online.
A user identity can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
You can also reference a user account by using the user's Active Directory distinguished name.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
NOTE: This parameter is reserved for internal Microsoft use.

Specifies the globally unique identifier (GUID) of your Skype for Business Online tenant account.
For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308".
You can find your tenant ID by running this command: 

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantDomain
NOTE: This parameter is reserved for internal Microsoft use.

Specifies the domain name for the tenant or organization.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

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
[Enable-CsOnlineDialInConferencingUser](https://docs.microsoft.com/powershell/module/skype/enable-csonlinedialinconferencinguser?view=skype-ps)

[Get-CsOnlineDialInConferencingUser](https://docs.microsoft.com/powershell/module/skype/get-csonlinedialinconferencinguser?view=skype-ps)

[Set-CsOnlineDialInConferencingUser](https://docs.microsoft.com/powershell/module/skype/set-csonlinedialinconferencinguser?view=skype-ps)
