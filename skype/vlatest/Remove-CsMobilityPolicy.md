---
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsMobilityPolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Removes an existing mobility policy.
Mobility policies determine whether or not a user can use Call via Work, a feature that enables users to make and receive phone calls on their mobile phone by using their work phone number instead of their mobile phone number.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.

Below Content Applies To: Skype for Business Online

Remove-CsMobilityPolicy \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Below Content Applies To: Skype for Business Server 2015

Removes an existing mobility policy.
Mobility policies determine whether or not a user can use Call via Work, a feature that enables users to make and receive phone calls on their mobile phone by using their work phone number instead of their mobile phone number.
Mobility policies can also be used to require Wi-Fi connections when making or receiving calls.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.



## SYNTAX

```
Remove-CsMobilityPolicy [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [-BypassDualWrite <Object>]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

Lync Mobile is a client application that enables users to run Lync on their mobile phones.
Call via Work provides a way for users to make calls on their mobile phone and yet have it appear as though the call originated from their work phone number instead of their mobile phone number.
Users who have been enabled for Call via Work can achieve this either by dialing directly from their mobile phone or by using the dial-out conferencing option.
With dial-out conferencing, a user effectively asks the Mobility Service server to make a call for them.
The server will set up the call, and then call the user back on their mobile phone.
After the user has answered, the server will then dial the party being called.

Both of these capabilities - the ability to run Lync Mobile and the ability to use Call via Work - are managed using mobility policies.
When you install Lync Server, you will have a single, global mobility policy that applies to all your users.
However, administrators can use the New-CsMobilityPolicy cmdlet to create custom policies at either the site or the per-user scope.

If you do create custom policies at either the site or the per-user scope you can later delete those policies by using the Remove-CsMobilityPolicy cmdlet.
If you delete a per-user policy, then any users assigned that policy will be managed by the appropriate site policy (if one exists) or by the global policy.
If you remove a site policy, users governed by that policy will then be managed by the global policy.

Note that you can also run Remove-CsMobilityPolicy against the global policy.
If you do that, however, the global policy will not actually be deleted; instead, the properties in that policy will be reset to their default values.
In this case, that means enabling Call via Work.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsMobilityPolicy cmdlet locally: RTCUniversalServerAdmins.

Below Content Applies To: Skype for Business Online

{{Fill in the Description}}

Below Content Applies To: Skype for Business Server 2015

Skype for Business Mobile is a client application that enables users to run Skype for Business on their mobile phones.
Call via Work provides a way for users to make calls on their mobile phone and yet have it appear as though the call originated from their work phone number instead of their mobile phone number.
Users who have been enabled for Call via Work can achieve this either by dialing directly from their mobile phone or by using the dial-out conferencing option.
With dial-out conferencing, a user effectively asks the Mobility Service server to make a call for them.
The server will set up the call, and then call the user back on their mobile phone.
After the user has answered, the server will then dial the party being called.
Both of these capabilities can be managed by using mobility policies.

With Skype for Business Server 2015, mobile devices can make or receive phone calls by using either the standard cellular phone network.
or by using Wi-Fi connections.
Mobility policies can be used to require Wi-Fi connections and prevent calls over the cellular network.

When you install Skype for Business Server 2015, you will have a single, global mobility policy that applies to all your users.
However, administrators can use the New-CsMobilityPolicy cmdlet to create custom policies at either the site or the per-user scope.

If you do create custom policies at either the site or the per-user scope you can later delete those policies by using the Remove-CsMobilityPolicy cmdlet.
If you delete a per-user policy, then any users assigned that policy will be managed by the appropriate site policy (if one exists) or by the global policy.
If you remove a site policy, users governed by that policy will then be managed by the global policy.

Note that you can also run the Remove-CsMobilityPolicy cmdlet against the global policy.
If you do that, however, the global policy will not actually be deleted; instead, the properties in that policy will be reset to their default values.
In this case, that means enabling Call via Work.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 removes the mobility policy configured for the Redmond site.
When the policy is removed, users previously managed by the Redmond site policy will now be managed by the global policy.

Remove-CsMobilityPolicy -Identity "site:Redmond"

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 removes the mobility policy configured for the Redmond site.
When the policy is removed, users previously managed by the Redmond site policy will now be managed by the global policy.

Remove-CsMobilityPolicy -Identity "site:Redmond"

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the mobility policies configured at the per-user scope are removed.
To do this, the command first uses the Get-CsMobilityPolicy cmdlet and the Filter parameter to retrieve all the policies that have an Identity that begins with the string value "Tag:"; by definition, any policy meeting that criterion will be a per-user policy.
That collection of per-user policies is then piped to the Remove-CsMobilityPolicy cmdlet, which deletes each policy in the collection.

Get-CsMobilityPolicy -Filter "tag:*" | Remove-CsMobilityPolicy

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the mobility policies configured at the per-user scope are removed.
To do this, the command first uses the Get-CsMobilityPolicy cmdlet and the Filter parameter to retrieve all the policies that have an Identity that begins with the string value "Tag:"; by definition, any policy meeting that criterion will be a per-user policy.
That collection of per-user policies is then piped to the Remove-CsMobilityPolicy cmdlet, which deletes each policy in the collection.

Get-CsMobilityPolicy -Filter "tag:*" | Remove-CsMobilityPolicy

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 demonstrates a way to delete all the mobility policies where Call via Work has been enabled.
To do this, the command first uses Get-CsMobilityPolicy to retrieve a collection of all the mobility policies currently in use in the organization.
That collection is then piped to the where-Object cmdlet, which picks out only those policies where the EnableOutsideVoice property is set to False.
Any policies where EnableOutsideVoice is False are then piped to, and removed by, the Remove-CsMobilityPolicy cmdlet.

Get-CsMobilityPolicy | Where-Object {$_.EnableOutsideVoice -eq $False} | Remove-CsMobilityPolicy

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 demonstrates a way to delete all the mobility policies where Call via Work has been enabled.
To do this, the command first uses the Get-CsMobilityPolicy cmdlet to retrieve a collection of all the mobility policies currently in use in the organization.
That collection is then piped to the where-Object cmdlet, which picks out only those policies where the EnableOutsideVoice property is set to False.
Any policies where EnableOutsideVoice is False are then piped to, and removed by, the Remove-CsMobilityPolicy cmdlet.

Get-CsMobilityPolicy | Where-Object {$_.EnableOutsideVoice -eq $False} | Remove-CsMobilityPolicy

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Unique identifier for the client policy to be removed.
To "remove" the global policy, use the following syntax:

-Identity global

Note, however, that the global policy cannot actually be removed.
Instead, all the properties in that policy will be reset to their default values.

To remove a site policy, use syntax similar to this:

-Identity "site:Redmond"

To remove a per-user policy, use syntax similar to this:

-Identity "SalesDepartmentPolicy"

You cannot use wildcards when specifying a policy Identity.



Below Content Applies To: Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



Below Content Applies To: Skype for Business Online

Prompts you for confirmation before running the cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Below Content Applies To: Lync Server 2013

If this parameter is present, the policy will be removed even if it is currently assigned to at least one user.
If this parameter is not present, then Remove-CsMobilityPolicy will not automatically remove a per-user policy that is assigned to at least one user.
Instead, a confirmation prompt will appear asking if you are sure that you want to remove the policy.
You must answer yes (by pressing the Y key) before the command will continue and the policy is removed.

This parameter applies only to per-user policies.



Below Content Applies To: Skype for Business Online

{{Fill Force Description}}



Below Content Applies To: Skype for Business Server 2015

If this parameter is present, the policy will be removed even if it is currently assigned to at least one user.
If this parameter is not present, then the Remove-CsMobilityPolicy cmdlet will not automatically remove a per-user policy that is assigned to at least one user.
Instead, a confirmation prompt will appear asking if you are sure that you want to remove the policy.
You must answer yes (by pressing the Y key) before the command will continue and the policy is removed.

This parameter applies only to per-user policies.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



Below Content Applies To: Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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
Below Content Applies To: Skype for Business Online

{{Fill Tenant Description}}



Below Content Applies To: Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the mobility policy is being removed.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



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
Microsoft.Rtc.Management.WriteableConfig.Policy.Mobility.Mobility.
Remove-CsMobilityPolicy accepts pipelined instances of the Mobility object.

### Microsoft.Rtc.Management.Xds.XdsIdentity

###  
Microsoft.Rtc.Management.WriteableConfig.Policy.Mobility.Mobility.
The Remove-CsMobilityPolicy cmdlet accepts pipelined instances of the Mobility object.

## OUTPUTS

###  
None.
Instead, Remove-CsMobilityPolicy deletes instances of the Microsoft.Rtc.Management.WriteableConfig.Policy.Mobility.Mobility object.

### System.Object

###  
None.
Instead, the Remove-CsMobilityPolicy cmdlet deletes instances of the Microsoft.Rtc.Management.WriteableConfig.Policy.Mobility.Mobility object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d3dc4653-25ab-45ef-b325-fba01e45acca(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d3dc4653-25ab-45ef-b325-fba01e45acca(OCS.16).aspx)

