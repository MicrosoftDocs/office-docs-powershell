---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsCpsConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the Call Park service.
Call parking is a service that allows a user to "park" an incoming phone call.
Parking a call transfers it to a number in a specified range, or orbit, and then immediately places the call on hold.
Anyone (not just the person who originally answered the call) can resume the conversation from any telephone in the system by entering the correct number.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Returns information about the Call Park service.
Call parking is a service that allows a user to "park" an incoming phone call.
Parking a call transfers it to a number in a specified range, or orbit, and then immediately places the call on hold.
Anyone (not just the person who originally answered the call) can resume the conversation from any telephone in the system by entering the correct number.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsCpsConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsCpsConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

This cmdlet is used to retrieve one or more Call Park service configurations.
A Call Park service configuration specifies what happens to a call once it's parked.
For example, if a parked call isn't answered after a period of time it can be automatically forwarded to someone else, such as an administrator, or to a Response Group.
Calls can also be configured to ring after a certain period of time to ensure the call isn't forgotten.
In addition, Call Park service can be configured to play music on hold to the caller while the call is parked.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsCpsConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsCpsConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

This cmdlet is used to retrieve one or more Call Park service configurations.
A Call Park service configuration specifies what happens to a call once it's parked.
For example, if a parked call isn't answered after a period of time it can be automatically forwarded to someone else, such as an administrator, or to a Response Group.
Calls can also be configured to ring after a certain period of time to ensure the call isn't forgotten.
In addition, Call Park service can be configured to play music on hold to the caller while the call is parked.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsCpsConfiguration
```

Example 1 retrieves a collection of all the Call Park service configurations that have been defined for use in your organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 retrieves a collection of all the Call Park service configurations that have been defined for use in your organization.

Get-CsCpsConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 retrieves a collection of all the Call Park service configurations that have been defined for use in your organization.

Get-CsCpsConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsCpsConfiguration -Identity site:Redmond1
```

The preceding command retrieves only the Call Park service configurations with the Identity site:Redmond1.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 retrieves only the Call Park service configurations with the Identity site:Redmond1.

Get-CsCpsConfiguration -Identity site:Redmond1

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 retrieves only the Call Park service configurations with the Identity site:Redmond1.

Get-CsCpsConfiguration -Identity site:Redmond1

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsCpsConfiguration -Filter site:*
```

In Example 3, the Filter parameter is used to return all the Call Park service configurations that have been configured at the site scope.
The wildcard string site:* tells Get-CsCpsConfiguration to return only those settings where the Identity begins with the string value site:.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, the Filter parameter is used to return all the Call Park service configurations that have been configured at the site scope.
The wildcard string site:* tells Get-CsCpsConfiguration to return only those settings where the Identity begins with the string value site:.

Get-CsCpsConfiguration -Filter site:*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the Filter parameter is used to return all the Call Park service configurations that have been configured at the site scope.
The wildcard string site:* tells the Get-CsCpsConfiguration cmdlet to return only those settings where the Identity begins with the string value site:.

Get-CsCpsConfiguration -Filter site:*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsCpsConfiguration -Filter *:re*
```

As in Example 3, in this example we use the Filter parameter to retrieve a subset of all the defined Call Park service configurations.
In this case, we filter on the string *:re*, which will return Call Park configurations for all sites with names beginning with the letters re, such as Redmond1, Redmond2, and RemoteComputer.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

As in Example 3, in this example we use the Filter parameter to retrieve a subset of all the defined Call Park service configurations.
In this case, we filter on the string *:re*, which will return Call Park configurations for all sites with names beginning with the letters re, such as Redmond1, Redmond2, and RemoteComputer.

Get-CsCpsConfiguration -Filter *:re*

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

As in Example 3, in this example we use the Filter parameter to retrieve a subset of all the defined Call Park service configurations.
In this case, we filter on the string *:re*, which will return Call Park configurations for all sites with names beginning with the letters re, such as Redmond1, Redmond2, and RemoteComputer.

Get-CsCpsConfiguration -Filter *:re*

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsCpsConfiguration | Where-Object {$_.EnableMusicOnHold -eq $False}
```

The command shown above returns all the Call Park service settings that do not play music when a caller is placed on hold.
To do this, the command first uses Get-CsCpsConfiguration to retrieve all the Call Park service settings configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which, in turn, applies a filter that limits the returned data to those items where the EnableMusicOnHold property is equal to (-eq) False.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

Example 5 returns all the Call Park service settings that do not play music when a caller is placed on hold.
To do this, the command first uses Get-CsCpsConfiguration to retrieve all the Call Park service settings configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which, in turn, applies a filter that limits the returned data to those items where the EnableMusicOnHold property is equal to (-eq) False.

Get-CsCpsConfiguration | Where-Object {$_.EnableMusicOnHold -eq $False}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

Example 5 returns all the Call Park service settings that do not play music when a caller is placed on hold.
To do this, the command first uses the Get-CsCpsConfiguration cmdlet to retrieve all the Call Park service settings configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which, in turn, applies a filter that limits the returned data to those items where the EnableMusicOnHold property is equal to (-eq) False.

Get-CsCpsConfiguration | Where-Object {$_.EnableMusicOnHold -eq $False}

## PARAMETERS

### -Identity
The unique identifier of the Call Park service configuration you want to retrieve.
This identifier will be either Global or site:\<sitename\>, where \<sitename\> is the name of the site to which the configuration applies.

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
Allows you to do a wildcard search to retrieve only those configurations with Identity values matching the wildcard string.

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
Retrieves the Call Park service information from the local replica of the Central Management store, rather than the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
Retrieves one or more objects of type Microsoft.Rtc.Management.WritableConfig.Settings.CallParkServiceSettings.CallParkServiceSettings.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d81ee8fe-d02b-4f60-a4d5-6aa84f65d156(OCS.14).aspx)

[New-CsCpsConfiguration]()

[Remove-CsCpsConfiguration]()

[Set-CsCpsConfiguration]()

[Set-CsCallParkServiceMusicOnHoldFile]()

[Online Version](http://technet.microsoft.com/EN-US/library/d81ee8fe-d02b-4f60-a4d5-6aa84f65d156(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d81ee8fe-d02b-4f60-a4d5-6aa84f65d156(OCS.16).aspx)

