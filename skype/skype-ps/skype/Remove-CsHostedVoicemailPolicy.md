---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsHostedVoicemailPolicy
schema: 2.0.0
---

# Remove-CsHostedVoicemailPolicy

## SYNOPSIS
Removes a hosted voice mail policy.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsHostedVoicemailPolicy [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a policy that specifies how to route unanswered calls to the user to a hosted Exchange Unified Messaging (UM) service.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsHostedVoicemailPolicy -Identity ExRedmond
```

This command removes the hosted voice mail policy for the ExRedmond per-user policy.


### -------------------------- Example 2 --------------------------
```
Get-CsHostedVoicemailPolicy -Filter tag* | Remove-CsHostedVoicemailPolicy
```

The command in Example 2 removes all per-user hosted voice mail policies.
The command starts by calling the `Get-CsHostedVoicemailPolicy` cmdlet with a Filter of tag*, which will retrieve all policies defined as per-user policies.
That set of policies is then piped to the `Remove-CsHostedVoicemailPolicy` cmdlet, which deletes each one.


## PARAMETERS

### -Identity
A unique identifier for the hosted voice mail policy that you want to remove.
This identifier includes the scope (in the case of global), the scope and site (for a site policy, such as site:Redmond), or the policy name (for a per-user policy, such as HVUserPolicy).

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for the hosted voicemail policy being deleted.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`


```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.HostedVoicemailPolicy object.
Accepts pipelined input of hosted voice mail policy objects.

## OUTPUTS

###  
This cmdlet does not return an object.
It removes an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.HostedVoicemailPolicy.

## NOTES

## RELATED LINKS

[New-CsHostedVoicemailPolicy](New-CsHostedVoicemailPolicy.md)

[Set-CsHostedVoicemailPolicy](Set-CsHostedVoicemailPolicy.md)

[Get-CsHostedVoicemailPolicy](Get-CsHostedVoicemailPolicy.md)

[Grant-CsHostedVoicemailPolicy](Grant-CsHostedVoicemailPolicy.md)

