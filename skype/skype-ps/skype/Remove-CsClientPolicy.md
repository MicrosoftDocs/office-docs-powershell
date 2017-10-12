---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
title: Remove-CsClientPolicy
schema: 2.0.0
---

# Remove-CsClientPolicy

## SYNOPSIS
Removes an existing client policy.
Among other things, client policies help determine the features of Skype for Business that are available to users; for example, you might give some users the right to transfer files while denying this right to other users.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsClientPolicy [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [-BypassDualWrite <Object>]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Skype for Business Server policies, can readily be targeted toward selected groups of users.
You can even create a custom policy that gets assigned to a single user.

Client policies can be configured at the global, site and per-user scopes.
Policies that have been configured at the site or per-user scope, can later be deleted by using the `Remove-CsClientPolicy` cmdlet.
You can also run the `Remove-CsClientPolicy` cmdlet against the global policy.
In that case, the global policy will not be removed; that's because global policies cannot be deleted.
However, all the properties in the global policy will be reset to their default values.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsClientPolicy -Identity SalesPolicy
```

In Example 1, the `Remove-CsClientPolicy` cmdlet is used to delete the client policy that has the Identity SalesPolicy.


### -------------------------- Example 2 --------------------------
```
Get-CsClientPolicy -Filter "tag:*" | Remove-CsClientPolicy
```

In Example 2, the `Get-CsClientPolicy` cmdlet and the `Remove-CsClientPolicy` cmdlet are used to delete all the client policies that have been configured at the per-user scope.
The command uses the `Get-CsClientPolicy` cmdlet and the Filter parameter to return a collection of all the client policies configured at the per-user scope; the filter value "tag:*" tells the `Get-CsClientPolicy` cmdlet to limit the retrieved data to client policies that have an Identity that begins with the string value "tag:".
The filtered collection is then piped to the `Remove-CsClientPolicy` cmdlet, which removes each policy in the collection.


### -------------------------- Example 3 --------------------------
```
Get-CsClientPolicy | Where-Object {$_.EnableAppearOffline -eq $True} | Remove-CsClientPolicy
```

Example 3 deletes all the client policies where the EnableAppearOffline property is set to True.
To do this, the `Get-CsClientPolicy` cmdlet is first called without any additional parameters; that returns a collection of all the client policies configured for use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those policies where the EnableAppearOffline property is equal to True.
In turn, this filtered collection is piped to the `Remove-CsClientPolicy` cmdlet, which deletes each policy in the collection.


## PARAMETERS

### -Identity
Unique identifier for the client policy to be removed.
To "remove" the global policy, use the following syntax: `-Identity global`.
(Note that the global policy cannot actually be removed.
Instead, all the properties in that policy will be reset to their default values.) To remove a site policy, use syntax similar to this: `-Identity "site:Redmond"`.
To remove a per-user policy, use syntax similar to this: `-Identity "SalesDepartmentPolicy"`.
You cannot use wildcards when specifying a policy Identity.


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
If this parameter is present, the policy will automatically be removed even if it is currently assigned to at least one user.
If this parameter is not present, then the `Remove-CsClientPolicy` cmdlet will not automatically remove a per-user policy that is assigned to at least one user.
Instead, a confirmation prompt will appear asking if you are sure that you want to remove the policy.
You must answer yes (by pressing the Y key) before the command will continue and the policy will be removed.


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

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

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

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the client policy is being removed.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Policy.Client.ClientPolicy object.
The `Remove-CsClientPolicy` cmdlet accepts pipelined instances of the client policy object.

## OUTPUTS

###  
The `Remove-CsClientPolicy` cmdlet does not return a value.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Client.ClientPolicy object.

## NOTES

## RELATED LINKS

[Get-CsClientPolicy](Get-CsClientPolicy.md)

[Grant-CsClientPolicy](Grant-CsClientPolicy.md)

[New-CsClientPolicy](New-CsClientPolicy.md)

[Set-CsClientPolicy](Set-CsClientPolicy.md)
