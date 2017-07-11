---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsHostedVoicemailPolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes a hosted voice mail policy.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes a hosted voice mail policy.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsHostedVoicemailPolicy [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

This cmdlet removes a policy that specifies how to route unanswered calls to the user to a hosted Exchange Unified Messaging (UM) service.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsHostedVoicemailPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsHostedVoicemailPolicy"}

Below Content Applies To: Skype for Business Server 2015

This cmdlet removes a policy that specifies how to route unanswered calls to the user to a hosted Exchange Unified Messaging (UM) service.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsHostedVoicemailPolicy -Identity ExRedmond
```

This command removes the hosted voice mail policy for the ExRedmond per-user policy.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This command removes the hosted voice mail policy for the ExRedmond per-user policy.

Remove-CsHostedVoicemailPolicy -Identity ExRedmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This command removes the hosted voice mail policy for the ExRedmond per-user policy.

Remove-CsHostedVoicemailPolicy -Identity ExRedmond

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsHostedVoicemailPolicy -Filter tag* | Remove-CsHostedVoicemailPolicy
```

The command in Example 2 removes all per-user hosted voice mail policies.
The command starts by calling the Get-CsHostedVoicemailPolicy cmdlet with a Filter of tag*, which will retrieve all policies defined as per-user policies.
That set of policies is then piped to Remove-CsHostedVoicemailPolicy, which deletes each one.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command in Example 2 removes all per-user hosted voice mail policies.
The command starts by calling the Get-CsHostedVoicemailPolicy cmdlet with a Filter of tag*, which will retrieve all policies defined as per-user policies.
That set of policies is then piped to Remove-CsHostedVoicemailPolicy, which deletes each one.

Get-CsHostedVoicemailPolicy -Filter tag* | Remove-CsHostedVoicemailPolicy

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command in Example 2 removes all per-user hosted voice mail policies.
The command starts by calling the Get-CsHostedVoicemailPolicy cmdlet with a Filter of tag*, which will retrieve all policies defined as per-user policies.
That set of policies is then piped to the Remove-CsHostedVoicemailPolicy cmdlet, which deletes each one.

Get-CsHostedVoicemailPolicy -Filter tag* | Remove-CsHostedVoicemailPolicy

## PARAMETERS

### -Identity
A unique identifier for the hosted voice mail policy that you want to remove.
This identifier includes the scope (in the case of global), the scope and site (for a site policy, such as site:Redmond), or the policy name (for a per-user policy, such as HVUserPolicy).

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Below Content Applies To: Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account for the hosted voicemail policy being deleted.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



Below Content Applies To: Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for the hosted voicemail policy being deleted.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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

[Online Version](http://technet.microsoft.com/EN-US/library/13968bbe-1403-46de-b02a-ed61e712d1b3(OCS.14).aspx)

[New-CsHostedVoicemailPolicy]()

[Set-CsHostedVoicemailPolicy]()

[Get-CsHostedVoicemailPolicy]()

[Grant-CsHostedVoicemailPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/13968bbe-1403-46de-b02a-ed61e712d1b3(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/13968bbe-1403-46de-b02a-ed61e712d1b3(OCS.16).aspx)

