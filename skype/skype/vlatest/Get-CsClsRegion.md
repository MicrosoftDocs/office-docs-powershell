---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsClsRegion

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns information about the centralized logging configuration regions in use in the organization.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
Centralized logging regions are intended for use with the Office 365 version of Lync Server.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the centralized logging configuration regions in use in the organization.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
Centralized logging regions are intended for use with Skype for Business Online.



## SYNTAX

### Filter
```
Get-CsClsRegion [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsClsRegion [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Microsoft Lync Server 2013 Preview.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using Windows PowerShell and the Search-CsClsLogging cmdlet.

With the Office 365 version of Lync Server, regions are used to determine which users have access to the personally-identifiable information that is written to the log files.
Regions are created by using the New-CsClsRegion cmdlet and then are added to a collection of centralized logging configuration settings.
You can return information about your centralized logging regions by using the Get-CsClsRegion cmdlet.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsClsRegion"}

Lync Server Control Panel: The functions carried out by the Get-CsClsRegion cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server 2015.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

With Skype for Business Online, regions are used to determine which users have access to the personally-identifiable information that is written to the log files.
Regions are created by using the New-CsClsRegion cmdlet and then are added to a collection of centralized logging configuration settings.
You can return information about your centralized logging regions by using the Get-CsClsRegion cmdlet.

Skype for Business Server Control Panel: The functions carried out by the Get-CsClsRegion cmdlet are not available in the Skype for Business Server 2015.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information for all the centralized logging regions configured for use in the organization.

Get-CsClsRegion

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information for all the centralized logging regions configured for use in the organization.

Get-CsClsRegion

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, information is returned only for the centralized logging region that has the Identity global/US.

Get-CsClsRegion -Identity "global/US"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information is returned only for the centralized logging region that has the Identity global/US.

Get-CsClsRegion -Identity "global/US"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns information about all the centralized logging regions configured at the global scope.
This is done by calling Get-CsClsRegion along with the Filter parameter; the filter value "global/*" limits the returned data to regions configured at the global scope.

Get-CsClsRegion -Filter "global/*"

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns information about all the centralized logging regions configured at the global scope.
This is done by calling the Get-CsClsRegion cmdlet along with the Filter parameter; the filter value "global/*" limits the returned data to regions configured at the global scope.

Get-CsClsRegion -Filter "global/*"

### -------------------------- Example 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 returns information for all the centralized logging regions that allow access by the Europe region.
To carry out this task, the command first uses Get-CsClsRegion to return a collection of all the centralized logging regions currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those regions where the OtherRegionAccess property includes the string value "Europe".

Get-CsClsRegion | Where-Object {$_.OtherRegionAccess -match "Europe"}

### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 returns information for all the centralized logging regions that allow access by the Europe region.
To carry out this task, the command first uses the Get-CsClsRegion cmdlet to return a collection of all the centralized logging regions currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those regions where the OtherRegionAccess property includes the string value "Europe".

Get-CsClsRegion | Where-Object {$_.OtherRegionAccess -match "Europe"}

## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return a centralized logging region (or regions).
For example, to return a collection of all the settings configured at the global scope, use this syntax:

-Filter "global/*"

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique identifier for the centralized logging region to be returned.
A region identity consists of the scope where the region was created followed by the region name.
For example, to return a region named US created at the global scope, use the following syntax:

-Identity "global/US"

If this parameter is not specified then Get-CsClsRegion returns information about all your centralized logging regions.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the centralized logging region to be returned.
A region identity consists of the scope where the region was created followed by the region name.
For example, to return a region named US created at the global scope, use the following syntax:

-Identity "global/US"

If this parameter is not specified then the Get-CsClsRegion cmdlet returns information about all your centralized logging regions.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the centralized logging configuration data from the local replica of the Central Management store, rather than the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Get-CsClsRegion does not accept pipelined input.

###  
None.
The Get-CsClsRegion cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsClsRegion returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Region#Decorated object.

###  
The Get-CsClsRegion cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Region#Decorated object.

## NOTES

## RELATED LINKS

[New-CsClsRegion]()

[Remove-CsClsRegion]()

[Set-CsClsRegion]()

[Online Version](http://technet.microsoft.com/EN-US/library/4f38e966-8e92-4549-8124-097c236c0165(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/4f38e966-8e92-4549-8124-097c236c0165(OCS.16).aspx)

