---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsArchivingPolicy
schema: 2.0.0
---

# Get-CsArchivingPolicy

## SYNOPSIS
Returns information about your instant messaging (IM) session archiving policies.
Archiving policies enable you to archive all IM and web conferencing sessions that take place between internal users and/or between internal users and external users.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsArchivingPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Filter
```
Get-CsArchivingPolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Many organizations find it useful to keep an archive of all the IM sessions that their users take part in; other organizations are legally required to keep such an archive.
In order to archive IM sessions with Skype for Business Server, you must perform two steps.
First, you need to enable archiving at the global and/or the site scope by using the Set-CsArchivingConfiguration cmdlet.
This gives you the ability to archive IM sessions; however, it does not automatically begin archiving those sessions.

Instead, to actually save transcripts of your IM sessions you must complete step 2: create one or more IM session archiving policies.
These policies determine which users will have their IM sessions recorded and which type of IM sessions (internal and/or external) will be archived.
Internal IM sessions are sessions where all of the participants are authenticated users who have Active Directory accounts within your organization; external IM sessions are sessions where at least one participant is an unauthenticated user who does not have an Active Directory account within your organization.
You can choose to archive only internal sessions, only external sessions, or both internal and external sessions.

Archiving policies (which are created with the New-CsArchivingPolicy cmdlet) can be assigned to the global site or to the site scope.
In addition, these policies can be assigned to the per-user scope; this means that a policy can be created and then applied to a specific user or a specific set of users.
For example, you might have a global policy that archives internal IM sessions for all your users.
In addition, you might create a second policy, one that archives both internal and external sessions, and apply that policy to your sales staff.
Because per-user policies take precedence over global and site policies, members of the sales staff will have all their IM sessions archived.
Other users (users who are not part of the sales department and are not affected by the sales policy) will have only their internal IM sessions archived.

The Get-CsArchivingPolicy cmdlet provides a way for you to return information about the archiving policies that have been configured for use in your organization.
Keep in mind that these policies are enforced only if IM session archiving has been enabled at the global or site scope.
To determine whether or not IM session archiving has been enabled, use the Get-CsArchivingConfiguration cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsArchivingPolicy
```

Example 1 calls the Get-CsArchivingPolicy cmdlet without any parameters.
This returns a collection of all the archiving policies currently in use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsArchivingPolicy -Identity site:Redmond
```

In Example 2, the Get-CsArchivingPolicy cmdlet is used to return the archiving policy with the Identity site:Redmond.
Because identities must be unique, this command will always return, at most, a single policy.

### -------------------------- Example 3 --------------------------
```
Get-CsArchivingPolicy -Filter tag:*
```

Example 3 returns a collection of all the archiving policies that have been configured at the per-user scope.
This is done by including the Filter parameter and the filter value "tag:*".
That filter value instructs the Get-CsArchivingPolicy cmdlet to return only those policies that have an identity beginning with the string value "tag:".

### -------------------------- Example 4 --------------------------
```
Get-CsArchivingPolicy | Where-Object {$_.ArchiveInternal -eq $False}
```

Example 4 returns a collection of all the archiving policies where the archiving of internal IM sessions has been disabled.
To do this, the Get-CsArchivingPolicy cmdlet is first used to return a collection of all the archiving policies currently in use.
That collection is then piped to the Where-Object cmdlet.
In turn, the Where-Object cmdlet applies a filter that restricts the returned data to those policies where the ArchiveInternal property is equal to False.

### -------------------------- Example 5 --------------------------
```
Get-CsArchivingPolicy | Where-Object {$_.ArchiveInternal -eq $False -and $_.ArchiveExternal -eq $False}
```

Example 5 is similar to Example 4; in this case, however, the command returns all of the archiving policies where both internal and external archiving have been disabled.
To accomplish this, the Get-CsArchivingPolicy cmdlet is first used to return a collection of all the archiving policies currently in use.
That collection is then piped to the Where-Object cmdlet, which picks out only those policies where both the ArchiveInternal and the ArchiveExternal properties are equal to False.
The -and operator instructs the Where-Object cmdlet to only select policies that meet all the specified criteria.
To select policies that meet just one (or both) of the specified criteria use the -or operator:


## PARAMETERS

### -Identity
Unique identifier of the archiving policy to be returned.
To refer to the global policy, use this syntax: -Identity global.
To refer to a site policy, use syntax similar to this: -Identity site:Redmond.
To refer to a per-user policy, use syntax similar to this: -Identity RedmondArchivingPolicy.
If this parameter is omitted, then all of the archiving policies configured for use in your organization will be returned.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.
For example, to return all of the policies configured at the site scope, use this syntax: -Filter "site:*".
This returns any policy where the Identity (the only property you can filter on) begins with the string value "site:".
To return a collection of all the per-user policies that have an Identity that begins with "Sales", use this syntax: -Filter "Sales*".

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the archiving policy data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose archiving policies are being returned.
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.Im.IMArchivingPolicy


## NOTES


## RELATED LINKS

[Grant-CsArchivingPolicy](Grant-CsArchivingPolicy.md)

[New-CsArchivingPolicy](New-CsArchivingPolicy.md)

[Remove-CsArchivingPolicy](Remove-CsArchivingPolicy.md)

[Set-CsArchivingPolicy](Set-CsArchivingPolicy.md)
