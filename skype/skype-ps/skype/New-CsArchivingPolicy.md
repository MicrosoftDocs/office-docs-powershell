---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsArchivingPolicy

## SYNOPSIS

Creates new instant messaging (IM) session archiving policies.
These policies give you the ability to archive all IM sessions that take place between internal users, and/or to archive all IM sessions that take place between internal users and external partners.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsArchivingPolicy [-Identity] <XdsIdentity> [-ArchiveExternal <Boolean>] [-ArchiveInternal <Boolean>]
 [-Description <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION

Many organizations find it useful to keep an archive of all the IM sessions that their users take part in; other organizations are legally required to keep such an archive.
In order to archive IM sessions with Skype for Business Server, you must perform two steps.
First, you need to enable archiving at the global and/or the site scope by using the Set-CsArchivingConfiguration cmdlet.
This gives you the ability to archive IM sessions; however, it does not automatically begin archiving those sessions.

Instead, to actually save transcripts of your IM sessions, you must complete step 2: create one or more IM session archiving policies that determine which users will have their IM sessions recorded as well as which type of IM sessions (internal and/or external) will be archived.
Internal IM sessions are sessions where all the participants are authenticated users who have Active Directory accounts within your organization; external IM sessions are sessions where at least one participant is an unauthenticated user who does not have an Active Directory account within your organization.
You can choose to archive only internal sessions, only external sessions, or both internal and external sessions.

Archiving policies can be assigned to the global scope or to the site scope.
In addition, these policies can be assigned to the per-user scope and then applied to a specific user or a specific set of users.
For example, suppose your global policy only archives internal IM sessions for all of your users.
In that case, you might create a second policy, one that archives both internal and external sessions and apply that policy only to your sales staff.
Because per-user policies take precedence over global and site policies, members of the sales staff will have all their IM sessions archived.
Other users (users who are not part of the sales department and are not affected by the sales policy) will only have their internal IM sessions archived.

You can create new archiving policies (at either the site or the per-user scope) by using the New-CsArchivingPolicy cmdlet.
If you create a policy at the site scope, it will automatically be applied to the site at the time the policy is created.
If you create a policy at the per-user scope, that policy will not be used until you explicitly assign it to a user or set of users by calling the Grant-CsArchivingPolicy cmdlet.
You cannot create a new policy at the global scope.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsArchivingPolicy -Identity site:Redmond -ArchiveInternal $True
```

In Example 1, the New-CsArchivingPolicy cmdlet is used to create a new archiving policy with the Identity site:Redmond.
In addition, the ArchiveInternal parameter is set to True; that means that this new policy will enable archiving for internal IM sessions and conferences.


### -------------------------- EXAMPLE 2 -------------------------- 
```

$x = New-CsArchivingPolicy -Identity site:Redmond -InMemory

$x.ArchiveInternal = $True

$x.ArchiveExternal = $True

Set-CsArchivingPolicy -Instance $x

```

Example 2 uses the InMemory parameter to create an archiving policy that initially exists only in memory.
In this set of commands, the New-CsArchivingPolicy cmdlet is first called, along with the InMemory parameter, to create a new site policy with the Identity site:Redmond.
This new, in-memory-only policy is stored in the variable $x.
In commands 2 and 3, property values for this virtual policy are modified; in command 2 the value of the ArchiveInternal property is set to True, and in command 3 the ArchiveExternal property is set to True.

Finally, the last command in the example uses the Set-CsArchivingPolicy cmdlet to transform the virtual policy site:Redmond into an actual IM session archiving policy.

## PARAMETERS

### -Identity
Indicates the unique Identity to be assigned to the policy.
New archiving policies can be created at the site scope or the per-user scope.
To create a new site policy, use the prefix "site:" followed by the name of the site.
For example, this syntax creates a new policy for the Redmond site: `-Identity site:Redmond.`
To create a new per-user policy, use an Identity similar to this: `-Identity SalesArchivingPolicy.`

Note that you cannot create a new global policy; if you want to make changes to the global policy, use the Set-CsArchivingPolicy cmdlet instead.
Likewise, you cannot create a new site or per-user policy if a policy with that Identity already exists.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveExternal

Indicates whether external IM sessions are archived.
(An external IM session is one in which at least one of the participants is an unauthenticated user who does not have an Active Directory account within your organization.) The default value is False, which means that IM sessions that include external users are not archived.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide a brief description of the archiving policy.
For example, the Description might be used to detail which users the policy should be applied to.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new archiving policy is being created.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
None.
The New-CsArchivingPolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsArchivingPolicy cmdlet creates instances of the Microsoft.Rtc.Management.WritableConfig.Policy.IM.IMArchivingPolicy object.

## NOTES

## RELATED LINKS

[Get-CsArchivingPolicy]()

[Grant-CsArchivingPolicy]()

[Remove-CsArchivingPolicy]()

[Set-CsArchivingPolicy]()

