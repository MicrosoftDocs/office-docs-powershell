---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsArchivingPolicy
schema: 2.0.0
---

# Set-CsArchivingPolicy

## SYNOPSIS
Modifies an existing instant messaging (IM) archiving policy.
An archiving policy gives you the ability to archive all IM sessions and conferences that take place between internal users; you can also archive sessions that take place between internal users and federated partners.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsArchivingPolicy [[-Identity] <XdsIdentity>] [-ArchiveExternal <Boolean>] [-ArchiveInternal <Boolean>]
 [-Description <String>] [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>] [<CommonParameters>]
```

### Instance
```
Set-CsArchivingPolicy [-Instance <PSObject>] [-ArchiveExternal <Boolean>] [-ArchiveInternal <Boolean>]
 [-Description <String>] [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Many organizations find it useful to keep an archive of all the IM sessions that their users take part in.
Other organizations are legally required to keep such an archive.
In order to archive IM sessions with Skype for Business Server, you must perform two steps.
First, you need to enable archiving at the global and/or the site scope by using the `Set-CsArchivingConfiguration` cmdlet.
This gives you the ability to archive IM sessions; however, it does not automatically begin archiving those sessions.

To actually save transcripts of your IM sessions, you must complete step two: create one or more archiving policies that determine which users will have their IM sessions recorded and which type of IM sessions (internal and/or external) will be archived.
Internal IM sessions are sessions where all the participants are authenticated users who have Active Directory accounts within your organization; external IM sessions are sessions where at least one participant is an unauthenticated user who does not have an Active Directory account within your organization.
You can choose to archive only internal sessions, only external sessions, or both internal and external sessions.

Archiving policies (created using the `New-CsArchivingPolicy` cmdlet) can be assigned to the global site or to the site scope.
In addition, these policies can be assigned to the per-user scope; that means that a policy can be created and then applied to a specific user or group of users.
For example, you might have a global policy that archives internal IM sessions for all of your users.
In addition, you might create a second policy, one that archives both internal and external sessions and apply that second policy only to your sales staff.
Because per-user policies take precedence over global and site policies, members of the sales staff will have all their IM sessions archived.
Other users (users who are not part of the sales department and are not affected by the sales policy) will have only their internal IM sessions archived.

The `Set-CsArchivingPolicy` cmdlet enables you to modify the property values for any of the IM session archiving policies currently in use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsArchivingPolicy -Identity global -ArchiveInternal $True
```

In this example, the `Set-CsArchivingPolicy` cmdlet is used to modify the global archiving policy.
In this case, the ArchiveInternal property is set to True.


### -------------------------- Example 2 --------------------------
```
Get-CsArchivingPolicy | Set-CsArchivingPolicy -ArchiveInternal $True
```

Example 2 is a variation of the command shown in Example 1.
This time, however, all of the archiving policies in the organization are configured to allow for the archiving of IM sessions.
To do this, the command first uses the `Get-CsArchivingPolicy` cmdlet to return a collection of all the IM session archiving policies currently in use.
That collection is then piped to the `Set-CsArchivingPolicy` cmdlet, which sets the ArchiveInternal property of each policy to True.


## PARAMETERS

### -Identity
Unique identifier for the archiving policy to be modified.
Archiving policies can be configured at the global, site, or per-user scopes.
To modify the global policy, use this syntax: `-Identity global`.
To modify a site policy, use syntax similar to this: `-Identity site:Redmond`.
To modify a per-user policy, use syntax similar to this: `-Identity SalesArchivingPolicy`.
If this parameter is not specified, then the global policy will be modified.

Wildcards are not allowed when specifying an Identity.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ArchiveExternal
Indicates whether external IM sessions are archived.
(An external IM session is one in which at least one of the participants is an unauthenticated user who does not have an Active Directory account within your organization.) The default value is False, which means that IM sessions that include external users are not archived.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveInternal
Indicates whether internal IM sessions are archived.
(An internal IM session is one in which all the participants are authenticated users who have Active Directory accounts within your organization.) The default value is False, which means that internal IM sessions are not archived.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide additional text regarding the policy.
For example, the Description property might be used to detail which users the policy should be applied to.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the archiving policy is being modified.
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
The `Set-CsArchivingPolicy` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Policy.IM.IMArchivingPolicy object.

## NOTES

## RELATED LINKS

[Get-CsArchivingPolicy](Get-CsArchivingPolicy.md)

[Grant-CsArchivingPolicy](Grant-CsArchivingPolicy.md)

[New-CsArchivingPolicy](New-CsArchivingPolicy.md)

[Remove-CsArchivingPolicy](Remove-CsArchivingPolicy.md)

