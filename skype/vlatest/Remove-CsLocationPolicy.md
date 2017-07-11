---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsLocationPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes the specified location policy.
(Location policies are used with the Enhanced 9-1-1 service to enable those who answer 911 calls to determine the caller's geographic location based on the phone number of the telephone or device used to make the call.)

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes the specified location policy.
(Location policies are used with the Enhanced 9-1-1 service to enable those who answer 911 calls to determine the caller's geographic location based on the phone number of the telephone or device used to make the call.) This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsLocationPolicy [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

The location policy is used to apply settings that relate to E9-1-1 functionality.
The location policy determines whether a user is enabled for E9-1-1, and if so what the behavior is of an emergency call.
For example, you can use the location policy to define what number constitutes an emergency call (911 in the United States), whether corporate security should be automatically notified, and how the call should be routed.
This cmdlet removes an existing location policy.

In addition to removing site and per-user location policies, this cmdlet can also be used to remove the global location policy.
In that case, however, the policy will not actually be removed; instead, the policy settings will simply be reset to their default values.

If this cmdlet is run against a per-user location policy that is assigned to user, you will be prompted to confirm the deletion.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsLocationPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsLocationPolicy"}

**Below Content Applies To:** Skype for Business Server 2015

The location policy is used to apply settings that relate to E9-1-1 functionality.
The location policy determines whether a user is enabled for E9-1-1, and if so what the behavior is of an emergency call.
For example, you can use the location policy to define what number constitutes an emergency call (911 in the United States), whether corporate security should be automatically notified, and how the call should be routed.
This cmdlet removes an existing location policy.

In addition to removing site and per-user location policies, this cmdlet can also be used to remove the global location policy.
In that case, however, the policy will not actually be removed; instead, the policy settings will simply be reset to their default values.

If this cmdlet is run against a per-user location policy that is assigned to user, you will be prompted to confirm the deletion.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsLocationPolicy -Identity Reno
```

The command shown in Example 1 uses Remove-CsLocationPolicy to delete the location policy with the Identity Reno.
When a per-user policy is removed, users or groups who were assigned that policy will automatically use the policy configured for their site instead.
If no policy has been configured for their site, then these users and groups will use the global location policy.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 uses Remove-CsLocationPolicy to delete the location policy with the Identity Reno.
When a per-user policy is removed, users or groups who were assigned that policy will automatically use the policy configured for their site instead.
If no policy has been configured for their site, then these users and groups will use the global location policy.

Remove-CsLocationPolicy -Identity Reno

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 uses the Remove-CsLocationPolicy cmdlet to delete the location policy with the Identity Reno.
When a per-user policy is removed, users or groups who were assigned that policy will automatically use the policy configured for their site instead.
If no policy has been configured for their site, then these users and groups will use the global location policy.

Remove-CsLocationPolicy -Identity Reno

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsLocationPolicy | Where-Object {$_.EnhancedEmergencyServicesEnabled -eq $false} | Remove-CsLocationPolicy
```

Example 2 deletes all the location policies where the EnhancedEmergencyServicesEnabled property is False.
(In other words, it deletes all location policies that don't enable E9-1-1.) To do this, the command first uses Get-CsLocationPolicy to retrieve all the location policies currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which applies a filter that limits the retrieved data to those policies where the EnhancedEmergencyServicesEnabled property is equal to (-eq) False ($False).
Finally, this filtered collection is passed to Remove-CsLocationPolicy, which proceeds to delete each policy in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 deletes all the location policies where the EnhancedEmergencyServicesEnabled property is False.
(In other words, it deletes all location policies that don't enable E9-1-1.) To do this, the command first uses Get-CsLocationPolicy to retrieve all the location policies currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which applies a filter that limits the retrieved data to those policies where the EnhancedEmergencyServicesEnabled property is equal to (-eq) False ($False).
Finally, this filtered collection is passed to Remove-CsLocationPolicy, which proceeds to delete each policy in the collection.

Get-CsLocationPolicy | Where-Object {$_.EnhancedEmergencyServicesEnabled -eq $false} | Remove-CsLocationPolicy

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 deletes all the location policies where the EnhancedEmergencyServicesEnabled property is False.
(In other words, it deletes all location policies that don't enable E9-1-1.) To do this, the command first uses the Get-CsLocationPolicy cmdlet to retrieve all the location policies currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which applies a filter that limits the retrieved data to those policies where the EnhancedEmergencyServicesEnabled property is equal to (-eq) False ($False).
Finally, this filtered collection is passed to the Remove-CsLocationPolicy cmdlet, which proceeds to delete each policy in the collection.

Get-CsLocationPolicy | Where-Object {$_.EnhancedEmergencyServicesEnabled -eq $false} | Remove-CsLocationPolicy

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

The unique identifier of the location policy you want to remove.
To remove the global location policy (which simply resets that policy to its default values), use a value of Global.
For a policy created at the site scope, this value will be in the form site:\<site name\>, where site name is the name of a site defined in the Microsoft Lync Server 2010 deployment (for example, site:Redmond).
For a policy created at the per-user scope, this value will simply be the name of the policy, such as Bldg30Floor3Sector1.



**Below Content Applies To:** Lync Server 2013

The unique identifier of the location policy you want to remove.
To remove the global location policy (which simply resets that policy to its default values), use a value of Global.
For a policy created at the site scope, this value will be in the form site:\<site name\>, where site name is the name of a site defined in the Lync Server deployment (for example, site:Redmond).
For a policy created at the per-user scope, this value will simply be the name of the policy, such as Bldg30Floor3Sector1.



**Below Content Applies To:** Skype for Business Server 2015

The unique identifier of the location policy you want to remove.
To remove the global location policy (which simply resets that policy to its default values), use a value of Global.
For a policy created at the site scope, this value will be in the form site:\<site name\>, where site name is the name of a site defined in the Skype for Business Server 2015 deployment (for example, site:Redmond).
For a policy created at the per-user scope, this value will simply be the name of the policy, such as Bldg30Floor3Sector1.



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
Specifying this parameter will bypass any confirmation prompts and the deletion will occur without any warning notice.
For example, if a per-user location policy is assigned to one or more users, a confirmation prompt will be displayed before deletion if this parameter is not included in the command.

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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the location policy is being removed.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

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

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Location.LocationPolicy object.
Accepts pipelined input of location policy objects.

## OUTPUTS

###  
This cmdlet does not return a value or object.
Instead, the cmdlet removes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Location.LocationPolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/8fb98533-6474-4071-a74c-ce3f6fa2d326(OCS.14).aspx)

[New-CsLocationPolicy]()

[Set-CsLocationPolicy]()

[Get-CsLocationPolicy]()

[Grant-CsLocationPolicy]()

[Test-CsLocationPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/8fb98533-6474-4071-a74c-ce3f6fa2d326(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/8fb98533-6474-4071-a74c-ce3f6fa2d326(OCS.16).aspx)

