---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsClientVersionPolicy
schema: 2.0.0
---

# Remove-CsClientVersionPolicy

## SYNOPSIS
Removes the specified client version policy.
Client version policies enable you to specify which clients will be able to log on to your Skype for Business Server system.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsClientVersionPolicy [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
Client version policies represent a collection of client version rules; in turn, client version rules are used to determine which client applications are allowed to log on to Skype for Business Server.
When a user attempts to log on to Skype for Business Server, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version and build number.
The version information included in the SIP header is then checked against a collection of client version rules to see if any rules apply to that particular application.
If such a rule exists, Skype for Business Server will then take the action specified by the rule.
For example, the rule might tell Skype for Business Server to allow the logon, to block it, or to allow the logon but then silently upgrade the client application to the latest version (for example, upgrade Communicator 2007 R2 to Skype for Business).

Client version policies, which can be applied at the global scope, the site scope, the service scope (Registrar service only), or the per-user scope, give you flexibility in determining which client applications can be used to access the system.
For example, as a general rule you might want to prevent users from logging on to Skype for Business Server by using Communicator 2007 R2; that's because Communicator 2007 R2 does not support the same features and capabilities as Skype for Business Server.
However, due to hardware or software conflicts you might also have a group of users who cannot upgrade to Skype for Business.
In that case, you can create a separate rule -- and a separate client version policy -- that allows those users to log on from within Communicator 2007 R2.

You can create new policies by using the `New-CsClientVersionPolicy` cmdlet.
These custom policies can later be removed by running the `Remove-CsClientVersionPolicy` cmdlet.
When you remove a client version policy, users previously governed by that policy will automatically inherit the next policy in the management hierarchy.
For example, if you delete a per-user policy, users will automatically be governed by the appropriate service policy.
If no service policy exists, then users will be governed by the appropriate site policy.
If no site policy exists, then users will be governed by the global policy.

Note that there will always be a global policy, meaning that no users will be left unmanaged by client version policies.
Although you can run the `Remove-CsClientVersionPolicy` cmdlet against the global policy, the policy will not actually be deleted.
Instead, all of the policy rules will be reset to their default values.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsClientVersionPolicy -Identity site:Redmond
```

The command shown in Example 1 deletes the client version policy for the Redmond site.


### -------------------------- Example 2 --------------------------
```
Get-CsClientVersionPolicy -Filter tag:* | Remove-CsClientVersionPolicy
```

In Example 2, all of the client version policies configured at the per-user scope are deleted.
To do this, the command first calls the `Get-CsClientVersionPolicy` cmdlet and includes the Filter parameter; the filter value "tag:*" limits the returned data to policies configured at the per-user scope.
This filtered collection is then piped to the `Remove-CsClientVersionPolicy` cmdlet, which deletes each item in the collection.


## PARAMETERS

### -Identity
Unique identifier for the policy to be deleted.
To remove a policy configured at the site scope, use syntax similar to this: `-Identity "site:Redmond"`.
To remove a policy configured at the service scope, use syntax similar to this: `-Identity "Registrar:atl-cs-001.litwareinc.com"`.
The Registrar service is the only service that can host a client version policy.

Policies can also be removed at the per-user scope.
To remove per-user policies, use syntax similar to this: `-Identity "SalesDepartmentPolicy"`.


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
Suppresses the display of any non-fatal error message that might occur when running the command.

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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the client version policy is being removed.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionPolicy object.
The `Remove-CsClientVersionPolicy` cmdlet accepts pipelined instances of the client version policy object.

## OUTPUTS

###  
The `Remove-CsClientVersionPolicy` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionPolicy object.

## NOTES

## RELATED LINKS

[Get-CsClientVersionPolicy](Get-CsClientVersionPolicy.md)

[Grant-CsClientVersionPolicy](Grant-CsClientVersionPolicy.md)

[New-CsClientVersionPolicy](New-CsClientVersionPolicy.md)

[Set-CsClientVersionPolicy](Set-CsClientVersionPolicy.md)

