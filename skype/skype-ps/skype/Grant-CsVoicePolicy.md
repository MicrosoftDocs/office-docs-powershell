---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Grant-CsVoicePolicy
schema: 2.0.0
---

# Grant-CsVoicePolicy

## SYNOPSIS

Assigns a voice policy to one or more users or groups.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Grant-CsVoicePolicy [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-DomainController <Fqdn>]
 [-PassThru] [-WhatIf] [-Confirm] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet assigns an existing per-user voice policy to a user.
Voice policies are used to manage such Enterprise Voice-related features as simultaneous ringing (the ability to have a second phone ring each time someone calls your office phone) and call forwarding.
Use this cmdlet to assign the settings that enable and disable these features for a specific user.

You can check whether a user has been granted a per-user voice policy by calling a command in this format: `Get-CsUser "\<user name\>" | Select-Object VoicePolicy.`
For example:

`Get-CsUser "Ken Myer" | Select-Object VoicePolicy`



## EXAMPLES


### -------------------------- EXAMPLE 1 -------------------------- 
```

Grant-CsVoicePolicy -Identity "Ken Myer" -PolicyName VoicePolicyRedmond
```

This example assigns the voice policy with the Identity VoicePolicyRedmond to the user with the display name Ken Myer.


### -------------------------- EXAMPLE 2 -------------------------- 
```

Get-CsUser -OU "ou=Finance,ou=North America,dc=litwareinc,dc=com" | Grant-CsVoicePolicy -PolicyName VoicePolicyRedmond
```

This example assigns the voice policy with the Identity VoicePolicyRedmond to all users in the Finance OU: OU=Finance,OU=NorthAmerica,DC=litwareinc,DC=com.
The first part of the command calls the Get-CsUser cmdlet to retrieve all users enabled for Skype for Business Server from the specified OU.
This collection of users is then piped to the Grant-CsVoicePolicy cmdlet, which assigns the policy VoicePolicyRedmond to each of these users.


## PARAMETERS

### -Identity

The Identity (unique identifier) of the user to whom the policy is being assigned.

User identities can be specified by using one of four formats: 1) The user's SIP address; 2) the user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).

Note that you can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" would return all the users with the last name Smith.

Full Data Type: Microsoft.Rtc.Management.AD.UserIdParameter



```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PolicyName

The name (Identity) of the voice policy to be assigned to the user.
(Note that this includes only the name portion of the Identity.
Per-user policy identities include a prefix of tag: that should not be included with the PolicyName.)


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

Allows you to specify a domain controller.
If no domain controller is specified, the first available will be used.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru

Returns the results of the command.
By default, this cmdlet does not generate any output.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose federation settings are being returned.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return your tenant ID by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
String.
Accepts a pipelined string value representing the Identity of a user account to which the voice policy is being granted.

## OUTPUTS

###  
When used with the PassThru parameter, returns an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADUserOrAppContact.

## NOTES

## RELATED LINKS

[New-CsVoicePolicy](New-CsVoicePolicy.md)

[Remove-CsVoicePolicy](Remove-CsVoicePolicy.md)

[Set-CsVoicePolicy](Set-CsVoicePolicy.md)

[Get-CsVoicePolicy](Get-CsVoicePolicy.md)

[Test-CsVoicePolicy](Test-CsVoicePolicy.md)

[Get-CsUser](Get-CsUser.md)

[Get-CsOnlineUser](Get-CsOnlineUser.md)

