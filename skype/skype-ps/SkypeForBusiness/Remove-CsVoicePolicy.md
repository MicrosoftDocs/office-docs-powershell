---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/remove-csvoicepolicy
schema: 2.0.0
title: Remove-CsVoicePolicy
---

# Remove-CsVoicePolicy

## SYNOPSIS
Removes the specified voice policy.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsVoicePolicy [-Tenant <Guid>] [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes an existing voice policy.
Voice policies are used to manage such Enterprise Voice-related features as simultaneous ringing (the ability to have a second phone ring each time someone calls your office phone) and call forwarding.
This cmdlet can also be used to remove the global voice policy.
In that case, however, the policy will not actually be removed; instead, the policy settings will simply be reset to their default values.


## EXAMPLES

### Example 1
```
Remove-CsVoicePolicy -Identity UserVoicePolicy1
```

This example removes the UserVoicePolicy1 per-user voice policy settings.


### Example 2
```
Get-CsVoicePolicy -Filter tag* | Remove-CsVoicePolicy
```

This example removes all the voice policy settings that can be assigned to specific users.
First the `Get-CsVoicePolicy` cmdlet is called with a Filter of tag*, which retrieves all the per-user voice policies.
That collection of policies is then piped to the `Remove-CsVoicePolicy` cmdlet to be removed.


## PARAMETERS

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

### -Identity

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

A unique identifier specifying the scope and in some cases the name, of the policy to be removed.


```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Tenant

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Globally unique identifier (GUID) of the Skype for Business Online tenant account for the voice policy being deleted.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoicePolicy

Accepts pipelined input of voice policy objects.

## OUTPUTS

### None
This cmdlet does not return a value.
It removes an instance of a Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoicePolicy object.

## NOTES

## RELATED LINKS

[New-CsVoicePolicy](New-CsVoicePolicy.md)

[Set-CsVoicePolicy](Set-CsVoicePolicy.md)

[Get-CsVoicePolicy](Get-CsVoicePolicy.md)

[Grant-CsVoicePolicy](Grant-CsVoicePolicy.md)

[Test-CsVoicePolicy](Test-CsVoicePolicy.md)
