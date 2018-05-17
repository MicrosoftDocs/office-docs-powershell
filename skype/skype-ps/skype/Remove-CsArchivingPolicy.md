---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsArchivingPolicy
schema: 2.0.0
---

# Remove-CsArchivingPolicy

## SYNOPSIS
Removes the specified instant messaging (IM) archiving policy.
IM archiving policies determine whether Skype for Business Server will automatically save all IM sessions that take place between internal users and/or all IM sessions between internal users and federated partners.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsArchivingPolicy [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
Many organizations find it useful to keep an archive of all of the IM sessions that their users take part in; other organizations are legally required to keep such an archive.
In order to archive IM sessions with Skype for Business Server, you must perform two steps.
First, you need to enable archiving at the global and/or the site scope by using the `Set-CsArchivingConfiguration` cmdlet.
This gives you the ability to archive IM sessions; however, it does not automatically begin archiving those sessions.

Instead, and to actually save transcripts of your IM sessions, you must complete step 2: create one or more archiving policies.
These policies determine which users will have their IM sessions recorded, in addition to which type of IM sessions (internal and/or external) will be archived.
Internal IM sessions are sessions where all the participants are authenticated users who have Active Directory accounts within your organization; external IM sessions are sessions where at least one participant is an unauthenticated user who does not have an Active Directory account within your organization.
You can choose to archive only internal sessions, only external sessions, or both internal and external sessions.

Archiving policies can be assigned to the global scope or to the site scope.
In addition, these policies can be assigned to the per-user scope and then applied to a specific user or a specific set of users.
For example, suppose your global policy archives only internal IM sessions for all of your users.
In that case, you might create a second policy, one that archives both internal and external sessions and apply that policy only to your sales staff.
Because per-user policies take precedence over global and site policies, members of the sales staff will have all their IM sessions archived.
Other users (users who are not part of the sales department and are not affected by the sales policy) will have only their internal IM sessions archived.

The `Remove-CsArchivingPolicy` cmdlet enables you to delete an archiving policy that has been created for use in your organization.
If you delete a per-user policy, all of the users who have been assigned that policy will automatically fall under the jurisdiction of the relevant site policy.
If there is no site policy, then those users will be governed by the global policy.
If you remove a site policy, users who were affected by that policy will automatically fall under the jurisdiction of the global policy.

Note that you can also run the `Remove-CsArchivingPolicy` cmdlet against the global policy; however, the global policy cannot be removed.
Instead, running the `Remove-CsArchivingPolicy` cmdlet against the global policy causes all the properties in that policy to be reset to their default values; that means that neither internal nor external IM sessions will be archived.
That's because the default value for both these properties (ArchiveInternal and ArchiveExternal) is False.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsArchivingPolicy -Identity site:Redmond
```

In Example 1, the `Remove-CsArchivingPolicy` cmdlet is used to delete the policy with the Identity site:Redmond.
Note that, when a policy configured at the site scope is deleted, users previously managed by the site policy will automatically be governed by the global archiving policy instead.


### -------------------------- Example 2 --------------------------
```
Get-CsArchivingPolicy -Filter site:* | Remove-CsArchivingPolicy
```

In Example 2, all of the archiving policies that have been configured at the site scope are removed.
This is done by using the `Get-CsArchivingPolicy` cmdlet and the Filter parameter to retrieve a collection of all the archiving policies assigned at the site scope.
This is done by using the filter value "site:*", which instructs the `Get-CsArchivingPolicy` cmdlet to return only those policies that have an Identity that begins with the string value "site:".
After the collection has been returned, the data is piped to the `Remove-CsArchivingPolicy` cmdlet, which deletes all the policies in the collection.


### -------------------------- Example 3 --------------------------
```
Get-CsArchivingPolicy | Where-Object {$_.ArchiveExternal -eq $False} | Remove-CsArchivingPolicy
```

Example 3 deletes all the archiving policies where the ArchiveExternal property is set to False.
To do this, the `Get-CsArchivingPolicy` cmdlet is first used to return a collection of all the archiving policies configured for use in the organization.
That collection is then piped to the `Where-Object` cmdlet, which picks out those policies where the ArchiveExternal property is equal to False.
The filtered collection is then passed to the `Remove-CsArchivingPolicy` cmdlet, which deletes each policy in the collection.


## PARAMETERS

### -Identity
Unique identifier for the archiving policy to be removed.
Archiving policies can be configured at the global, site, or per-user scopes.
To remove the global policy, use this syntax: `-Identity global`.
(Note that the global policy cannot actually be removed.
Instead, all of the policy properties will be reset to their default values.)

To remove a site policy, use syntax similar to this: `-Identity site:Redmond`.
To remove a per-user policy, use syntax similar to this: `-Identity SalesArchivingPolicy`.

Wildcards are not allowed when specifying an Identity.

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
If this parameter is present, the policy will automatically be removed even if it is currently assigned to at least one use.
If this parameter is not present, then the `Remove-CsArchivingPolicy` cmdlet will not automatically remove a per-user policy that is assigned to at least one user.
Instead, a confirmation prompt will appear asking if you are sure that you want to remove the policy.
You must answer yes (by pressing the Y key) before the command will continue and the policy will be removed.


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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the archiving policy is being removed.
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
Microsoft.Rtc.Management.WritableConfig.Policy.IM.IMArchivingPolicy object.
The `Remove-CsArchivingPolicy` cmdlet accepts pipelined input of archiving policy objects.

## OUTPUTS

###  
The `Remove-CsArchivingPolicy` cmdlet does not return a value or object.
Instead, the cmdlet removes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.IM.IMArchivingPolicy object.

## NOTES

## RELATED LINKS

[Get-CsArchivingPolicy](Get-CsArchivingPolicy.md)

[Grant-CsArchivingPolicy](Grant-CsArchivingPolicy.md)

[New-CsArchivingPolicy](New-CsArchivingPolicy.md)

[Set-CsArchivingPolicy](Set-CsArchivingPolicy.md)

