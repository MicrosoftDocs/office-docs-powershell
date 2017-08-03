---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsConferencingPolicy

## SYNOPSIS
Returns information about the conferencing policies that have been configured for use in your organization.
Conferencing policies determine the features and capabilities that can be used in a conference; this includes everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsConferencingPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsConferencingPolicy [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

###  (Default)
```
Get-CsConferencingPolicy [[-Identity] <Object>] [-ApplicableTo <Object>] [-BypassDualWrite <Object>]
 [-Filter <Object>] [-Include <Object>] [-LocalStore] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Conferencing is an important part of Skype for Business: conferencing enables groups of users to come together online to view slides and video, share applications, exchange files, and otherwise communicate and collaborate.

It's important for administrators to maintain control over conferences and conference settings.
In some cases, there might be security concerns: by default, anyone, including unauthenticated users, can participate in meetings and save any of the slides or handouts distributed during those meetings.
In other cases, there might be bandwidth concerns: having a multitude of simultaneous meetings, each involving hundreds of participants and each featuring video feeds and file sharing, has the potential to cause problems with your network.
In addition, there might be occasional legal concerns.
For example, by default meeting participants are allowed to make annotations on shared content; however, these annotations are not saved when the meeting is archived.
If your organization is required to keep a record of all electronic communication, you might want to disable annotations.

Of course, needing to manage conferencing settings is one thing; actually managing these settings is another.
In Skype for Business, conferences are managed by using conferencing policies.
(In previous versions of the software, these were known as meeting policies.) As noted, conferencing policies determine the features and capabilities that can be used in a conference, including everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
Conferencing policies can be configured at the global scope; at the site scope; or at the per-user scope.
This provides administrators with enormous flexibility when it comes to deciding which capabilities will be made available to which users.

The Get-CsConferencingPolicy cmdlet provides a way for you to return information about all the conferencing policies that have been configured for use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsConferencingPolicy
```

The first example returns a collection of all the conferencing policies configured for use in your organization.


### -------------------------- Example 2 --------------------------
```
Get-CsConferencingPolicy -Identity "Global"
```

In Example 2, the Identity parameter is used to limit the retrieved information to conferencing policies that have an identity equal to Global.
Because policy Identities must be unique, this command returns a single policy: the Global conferencing policy.

### -------------------------- Example 3 --------------------------
```
Get-CsConferencingPolicy -Filter "tag:*"
```

Example 3 uses the Filter parameter to return a collection of all the conferencing policies that have been configured at the per-user scope.
The wildcard value "tag:*" tells Windows PowerShell to limit the returned data to conferencing policies that have an identity beginning with the string value "tag:".

### -------------------------- Example 4 --------------------------
```
Get-CsConferencingPolicy | Where-Object {$_.MaxMeetingSize -gt 100}
```

Example 4 returns a collection of all the conferencing policies where the MaxMeetingSize property is greater than 100.
The command starts out by using the Get-CsConferencingPolicy cmdlet to return a collection of all the conferencing policies configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to policies where the MaxMeetingSize property is greater than 100.



### -------------------------- Example 5 --------------------------
```
Get-CsConferencingPolicy | Where-Object {$_.AllowExternalUsersToSaveContent -eq $True -and $_.AllowExternalUserControl -eq $True}
```

Example 5 returns all the conferencing policies that meet two criteria: the AllowExternalUsersToSaveContent property is equal to True and the AllowExternalUserControl property is also equal to True.
To do this, the command calls the Get-CsConferencingPolicy cmdlet without any additional parameters; this returns a collection of all the conferencing policies configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those policies where both AllowExternalUsersToSaveContent and AllowExternalUserControl are True.
The -and operator tells the Where-Object cmdlet that an object must meet all the specified criteria in order to be returned.

### -------------------------- Example 6 --------------------------
```
Get-CsConferencingPolicy | Where-Object {$_.AllowExternalUsersToSaveContent -eq $True -or $_.AllowExternalUserControl -eq $True}
```

Example 6 is a variation of the command shown in Example 5.
In this case, the command returns any policy that meets at least one (but not necessarily both) of the specified criteria: either the AllowExternalUsersToSaveContent property is equal to True and/or the AllowExternalUserControl property is equal to True.
To do this, the command calls the Get-CsConferencingPolicy cmdlet without any additional parameters; this returns a collection of all the conferencing policies configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those policies where either AllowExternalUsersToSaveContent and/or AllowExternalUserControl are equal to True.
The -or operator tells the Where-Object cmdlet that an object must meet just one of the specified criteria in order to be returned.

### -------------------------- Example 7 --------------------------
```
Get-CsConferencingPolicy -ApplicableTo "kenmyer@litwareinc.com"
```

In Example 7, the ApplicableTo parameter is used to return only the policies that can be assigned to the user "kenmyer@litwareinc.com".
The ApplicableTo parameter can only be used with Skype for Business Online; that's because, with Skype for Business Online, there might be policies that cannot be assigned to certain users due to licensing and/or country/region restrictions.
Note that this command requires the Office 365 UsageLocation property to be configured for the user's Active Directory user account.


## PARAMETERS

### -Identity
Unique identifier for the conferencing policy to be retrieved.
Conferencing policies can be configured at the global scope or at the per-user scope.
To retrieve the global policy, use this syntax: -Identity global.
To retrieve a per-user policy use syntax similar to this: -Identity SalesConferencingPolicy.

If this parameter is not included, the Get-CsConferencingPolicy cmdlet will return a collection of all the conferencing policies configured for use in your organization.

Note that wildcards are not allowed when specifying an Identity.
Use the Filter parameter if you need to use wildcards when specifying a conferencing policy.

```yaml
Type: XdsIdentity
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters when specifying the conferencing policy (or policies) to be returned.
For example, this syntax returns all the policies configured at the per-user scope

`: -Filter "tag:*"`

```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the conferencing policy data from the local replica of the Central Management store rather than from the Central Management store itself.

This parameter is not used with Skype for Business Online.

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

### -ApplicableTo
Returns a list of the conferencing policies that can be assigned to the specified user.
For example, to return a collection of policies that can be assigned to the user kenmyer@litwareinc.com, use this command:

`Get-CsConferencingPolicy -ApplicableTo "kenmyer@litwareinc.com"`

The ApplicableTo parameter is useful because it's possible that only some of the available per-user conferencing policies can be assigned to a given user.
This is due to the fact that different licensing agreements and different country/region restrictions might limit the policies that can be assigned to a user.
For example, if Ken Myer works in China, country/region restrictions might limit his access to policies A, B, D, and E, Meanwhile, similar restrictions might limit Pilar Ackerman, who works in the United States, to policies A, B, C, and F.
If you call Get-CsConferencingPolicy without using the ApplicableTo parameter you will get back a collection of all the available policies, including any policies that can't actually be assigned to a specific user.

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

### -Include
PARAMVALUE: Automatic | All | SubscriptionDefaults | TenantDefinedOnly

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
PARAMVALUE: Guid

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

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.Meeting.MeetingPolicy


## NOTES


## RELATED LINKS

[Grant-CsConferencingPolicy]()

[New-CsConferencingPolicy]()

[Remove-CsConferencingPolicy]()

[Set-CsConferencingPolicy]()

[Get-CsConferencingPolicy]()