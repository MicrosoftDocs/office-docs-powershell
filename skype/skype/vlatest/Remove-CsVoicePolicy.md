---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsVoicePolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes the specified voice policy.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes the specified voice policy.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Resets the global voice policy.



## SYNTAX

```
Remove-CsVoicePolicy [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>]
 [-BypassDualWrite <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

This cmdlet removes an existing voice policy.
Voice policies are used to manage such Enterprise Voice-related features as simultaneous ringing (the ability to have a second phone ring each time someone calls your office phone) and call forwarding.
This cmdlet can also be used to remove the global voice policy.
In that case, however, the policy will not actually be removed; instead, the policy settings will simply be reset to their default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsVoicePolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsVoicePolicy"}

**Below Content Applies To:** Skype for Business Online

Voice policies are used to manage such Enterprise Voice-related features as simultaneous ringing (the ability to have a second phone ring each time someone calls your office phone) and call forwarding.
This cmdlet enables you to reset the global voice policy.
When you run the Remove-CsVoicePolicy cmdlet the global the policy will not actually be removed; instead, the policy settings will be reset to their default values.

**Below Content Applies To:** Skype for Business Server 2015

This cmdlet removes an existing voice policy.
Voice policies are used to manage such Enterprise Voice-related features as simultaneous ringing (the ability to have a second phone ring each time someone calls your office phone) and call forwarding.
This cmdlet can also be used to remove the global voice policy.
In that case, however, the policy will not actually be removed; instead, the policy settings will simply be reset to their default values.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsVoicePolicy -Identity UserVoicePolicy1
```

This example removes the UserVoicePolicy1 per-user voice policy settings.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example removes the UserVoicePolicy1 per-user voice policy settings.

Remove-CsVoicePolicy -Identity UserVoicePolicy1

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Online)
```

```

This example resets the global voice policy.

Remove-CsVoicePolicy -Identity "global"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example removes the UserVoicePolicy1 per-user voice policy settings.

Remove-CsVoicePolicy -Identity UserVoicePolicy1

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsVoicePolicy -Filter tag* | Remove-CsVoicePolicy
```

This example removes all the voice policy settings that can be assigned to specific users.
First the Get-CsVoicePolicy cmdlet is called with a Filter of tag*, which retrieves all the per-user voice policies.
That collection of policies is then piped to the Remove-CsVoicePolicy cmdlet to be removed.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example removes all the voice policy settings that can be assigned to specific users.
First the Get-CsVoicePolicy cmdlet is called with a Filter of tag*, which retrieves all the per-user voice policies.
That collection of policies is then piped to the Remove-CsVoicePolicy cmdlet to be removed.

Get-CsVoicePolicy -Filter tag* | Remove-CsVoicePolicy

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example removes all the voice policy settings that can be assigned to specific users.
First the Get-CsVoicePolicy cmdlet is called with a Filter of tag*, which retrieves all the per-user voice policies.
That collection of policies is then piped to the Remove-CsVoicePolicy cmdlet to be removed.

Get-CsVoicePolicy -Filter tag* | Remove-CsVoicePolicy

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A unique identifier specifying the scope, and in some cases the name, of the policy to be removed.



**Below Content Applies To:** Skype for Business Online

A unique identifier specifying the voice policy to be removed.
The only allowed value is "global".
Any other value will generate an error messafe.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
**Below Content Applies To:** Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account for the voice policy being deleted.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Online

Globally unique identifier (GUID) of the Office 365 tenant account for the voice policy being deleted.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for the voice policy being deleted.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoicePolicy object.
Accepts pipelined input of voice policy objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an instance of a Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoicePolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/4d3e67be-c094-415f-b1e6-0719dec6f3fc(OCS.14).aspx)

[New-CsVoicePolicy]()

[Set-CsVoicePolicy]()

[Get-CsVoicePolicy]()

[Grant-CsVoicePolicy]()

[Test-CsVoicePolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/4d3e67be-c094-415f-b1e6-0719dec6f3fc(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/92f11242-32d0-4893-aa57-716ecffc931c(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/4d3e67be-c094-415f-b1e6-0719dec6f3fc(OCS.16).aspx)

