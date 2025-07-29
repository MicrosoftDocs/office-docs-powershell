---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/grant-csvoicepolicy
schema: 2.0.0
title: Grant-CsVoicePolicy
---

# Grant-CsVoicePolicy

## SYNOPSIS

Assigns a voice policy to one or more users or groups.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity (Default)
```
Grant-CsVoicePolicy [[-Identity] <UserIdParameter>] [-PolicyName] <String> [-Tenant <Guid>]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsVoicePolicy [-PolicyName] <String> [-Tenant <Guid>] [-DomainController <Fqdn>] [-PassThru]
 [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```


## DESCRIPTION

This cmdlet assigns an existing per-user voice policy to a user.
Voice policies are used to manage such Enterprise Voice-related features as simultaneous ringing (the ability to have a second phone ring each time someone calls your office phone) and call forwarding.
Use this cmdlet to assign the settings that enable and disable these features for a specific user.

You can check whether a user has been granted a per-user voice policy by calling a command in this format: `Get-CsUser "<user name>" | Select-Object VoicePolicy.`
For example:

`Get-CsUser "Ken Myer" | Select-Object VoicePolicy`

    NOTE - For accounts hosted in Skype for Business Online, it is not possible to grant a voice policy via PowerShell. In this scenario, the voice policy is automatically granted based on user licensing.

## EXAMPLES


### EXAMPLE 1
```
Grant-CsVoicePolicy -Identity "Ken Myer" -PolicyName VoicePolicyRedmond
```

This example assigns the voice policy with the Identity VoicePolicyRedmond to the user with the display name Ken Myer.


### EXAMPLE 2
```
Get-CsUser -OU "ou=Finance,ou=North America,dc=litwareinc,dc=com" | Grant-CsVoicePolicy -PolicyName VoicePolicyRedmond
```

This example assigns the voice policy with the Identity VoicePolicyRedmond to all users in the Finance OU: OU=Finance,OU=NorthAmerica,DC=litwareinc,DC=com.
The first part of the command calls the Get-CsUser cmdlet to retrieve all users enabled for Skype for Business Server from the specified OU.
This collection of users is then piped to the Grant-CsVoicePolicy cmdlet, which assigns the policy VoicePolicyRedmond to each of these users.


## PARAMETERS

### -DomainController

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Allows you to specify a domain controller.
If no domain controller is specified, the first available will be used.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The Identity (unique identifier) of the user to whom the policy is being assigned.

User identities can be specified by using one of four formats: 1) The user's SIP address; 2) the user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).

Note that you can use the asterisk (\*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" would return all the users with the last name Smith.

Full Data Type: Microsoft.Rtc.Management.AD.UserIdParameter

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Returns the results of the command.
By default, this cmdlet does not generate any output.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The name (Identity) of the voice policy to be assigned to the user.
(Note that this includes only the name portion of the Identity.
Per-user policy identities include a prefix of tag: that should not be included with the PolicyName.)

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Skype for Business Online

Globally unique identifier (GUID) of the tenant account whose federation settings are being returned.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return your tenant ID by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### System.String
Accepts a pipelined string value representing the Identity of a user account to which the voice policy is being granted.

## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.OCSADUserOrAppContact
When used with the PassThru parameter, returns an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADUserOrAppContact.

## NOTES

## RELATED LINKS

[New-CsVoicePolicy](New-CsVoicePolicy.md)

[Remove-CsVoicePolicy](Remove-CsVoicePolicy.md)

[Set-CsVoicePolicy](Set-CsVoicePolicy.md)

[Get-CsVoicePolicy](Get-CsVoicePolicy.md)

[Test-CsVoicePolicy](Test-CsVoicePolicy.md)

[Get-CsUser](Get-CsUser.md)
