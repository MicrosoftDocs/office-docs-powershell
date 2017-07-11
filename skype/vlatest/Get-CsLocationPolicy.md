---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsLocationPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about how (or if) the Enhanced 9-1-1 (E9-1-1) Location Information service has been configured.
The E9-1-1 service enables those who answer emergency calls to determine the caller's geographic location.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Returns information about how (or if) the Enhanced 9-1-1 (E9-1-1) Location Information service has been configured.
The E9-1-1 service enables those who answer emergency calls to determine the caller's geographic location.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsLocationPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Filter
```
Get-CsLocationPolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

The location policy is used to apply settings that relate to E9-1-1 functionality.
The location policy determines whether a user is enabled for E9-1-1, and if so what the behavior is of an emergency call.
For example, you can use the location policy to define what number constitutes an emergency call (911 in the United States), whether corporate security should be automatically notified, how the call should be routed, and so on.
This cmdlet retrieves one or more location policies.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsLocationPolicy cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsLocationPolicy"}

**Below Content Applies To:** Skype for Business Server 2015

The location policy is used to apply settings that relate to E9-1-1 functionality.
The location policy determines whether a user is enabled for E9-1-1, and if so what the behavior is of an emergency call.
For example, you can use the location policy to define what number constitutes an emergency call (911 in the United States), whether corporate security should be automatically notified, how the call should be routed, and so on.
This cmdlet retrieves one or more location policies.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsLocationPolicy
```

Example 1 returns a collection of all the location policies currently in use in your organization.
This is done simply by calling Get-CsLocationPolicy without any parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns a collection of all the location policies currently in use in your organization.
This is done simply by calling Get-CsLocationPolicy without any parameters.

Get-CsLocationPolicy

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns a collection of all the location policies currently in use in your organization.
This is done simply by calling the Get-CsLocationPolicy cmdlet without any parameters.

Get-CsLocationPolicy

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsLocationPolicy -Identity Reno
```

The command shown in Example 2 returns only those location policies that have an Identity equal to Reno.
Because identities must be unique, this command will only return, at most, one location policy.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 returns only those location policies that have an Identity equal to Reno.
Because identities must be unique, this command will only return, at most, one location policy.

Get-CsLocationPolicy -Identity Reno

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 returns only those location policies that have an Identity equal to Reno.
Because identities must be unique, this command will only return, at most, one location policy.

Get-CsLocationPolicy -Identity Reno

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsLocationPolicy -Filter tag:*
```

The preceding command uses the Filter parameter to return all the location policies that have been configured at the per-use scope.
(Policies configured at the per-user scope can be directly assigned to users and network sites.) The wildcard string tag:* tells Get-CsLocationPolicy that the returned data should be limited to those location policies that have an Identity that begins with the string value tag:.
Even though you don't need to specify the tag: prefix when retrieving an individual policy, you can use that prefix to filter on all per-user policies.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 uses the Filter parameter to return all the location policies that have been configured at the per-use scope.
(Policies configured at the per-user scope can be directly assigned to users and network sites.) The wildcard string tag:* tells Get-CsLocationPolicy that the returned data should be limited to those location policies that have an Identity that begins with the string value tag:.
Even though you don't need to specify the tag: prefix when retrieving an individual policy, you can use that prefix to filter on all per-user policies.

Get-CsLocationPolicy -Filter tag:*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 uses the Filter parameter to return all the location policies that have been configured at the per-use scope.
(Policies configured at the per-user scope can be directly assigned to users and network sites.) The wildcard string tag:* tells the Get-CsLocationPolicy cmdlet that the returned data should be limited to those location policies that have an Identity that begins with the string value tag:.
Even though you don't need to specify the tag: prefix when retrieving an individual policy, you can use that prefix to filter on all per-user policies.

Get-CsLocationPolicy -Filter tag:*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsLocationPolicy | Where-Object {$_.EnhancedEmergencyServicesEnabled -eq $False}
```

Example 4 returns a collection of all the location policies where enhanced emergency services are disabled.
To do this, the command first uses Get-CsLocationPolicy to return a collection of all the location policies currently in use in the organization.
That collection is then piped to the Where-Object cmdlet; in turn, Where-Object applies a filter that limits the returned data to those policies where the EnhancedEmergencyServicesEnabled property is equal to (-eq) False ($False).

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns a collection of all the location policies where enhanced emergency services are disabled.
To do this, the command first uses Get-CsLocationPolicy to return a collection of all the location policies currently in use in the organization.
That collection is then piped to the Where-Object cmdlet; in turn, Where-Object applies a filter that limits the returned data to those policies where the EnhancedEmergencyServicesEnabled property is equal to (-eq) False ($False).

Get-CsLocationPolicy | Where-Object {$_.EnhancedEmergencyServicesEnabled -eq $False}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns a collection of all the location policies where enhanced emergency services are disabled.
To do this, the command first uses the Get-CsLocationPolicy cmdlet to return a collection of all the location policies currently in use in the organization.
That collection is then piped to the Where-Object cmdlet; in turn, the Where-Object cmdlet applies a filter that limits the returned data to those policies where the EnhancedEmergencyServicesEnabled property is equal to (-eq) False ($False).

Get-CsLocationPolicy | Where-Object {$_.EnhancedEmergencyServicesEnabled -eq $False}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

The unique identifier of the location policy you want to retrieve.
To retrieve the global location policy, use a value of Global.
For a policy created at the site scope, this value will be in the form site:\<site name\>, where site name is the name of a site defined in the Microsoft Lync Server 2010 deployment (for example, site:Redmond).
For a policy created at the per-user scope, this value will simply be the name of the policy, such as Reno.



**Below Content Applies To:** Lync Server 2013

The unique identifier of the location policy you want to retrieve.
To retrieve the global location policy, use a value of Global.
For a policy created at the site scope, this value will be in the form site:\<site name\>, where site name is the name of a site defined in the Lync Server deployment (for example, site:Redmond).
For a policy created at the per-user scope, this value will simply be the name of the policy, such as Reno.



**Below Content Applies To:** Skype for Business Server 2015

The unique identifier of the location policy you want to retrieve.
To retrieve the global location policy, use a value of Global.
For a policy created at the site scope, this value will be in the form site:\<site name\>, where site name is the name of a site defined in the Skype for Business Server 2015 deployment (for example, site:Redmond).
For a policy created at the per-user scope, this value will simply be the name of the policy, such as Reno.



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
A string containing wildcard characters that will retrieve location policies based on matching the Identity value of the policy to the wildcard string.

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
Retrieves the location policy information from the local replica of the Central Management store, rather than the Central Management store itself.

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
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose location policies are being returned.
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
None.

## OUTPUTS

###  
Get-CsLocationPolicy returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Location.LocationPolicy object.

###  
The Get-CsLocationPolicy cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Location.LocationPolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d338af1b-3865-4010-a7fc-d5841c515ae6(OCS.14).aspx)

[New-CsLocationPolicy]()

[Remove-CsLocationPolicy]()

[Set-CsLocationPolicy]()

[Grant-CsLocationPolicy]()

[Test-CsLocationPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/d338af1b-3865-4010-a7fc-d5841c515ae6(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d338af1b-3865-4010-a7fc-d5841c515ae6(OCS.16).aspx)

