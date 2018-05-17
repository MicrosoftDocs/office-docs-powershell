---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsClsRegion
schema: 2.0.0
---

# Get-CsClsRegion

## SYNOPSIS
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
The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

With Skype for Business Online, regions are used to determine which users have access to the personally-identifiable information that is written to the log files.
Regions are created by using the New-CsClsRegion cmdlet and then are added to a collection of centralized logging configuration settings.
You can return information about your centralized logging regions by using the Get-CsClsRegion cmdlet.

The functions carried out by the Get-CsClsRegion cmdlet are not available in the Skype for Business Server 2015.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsClsRegion
```

The command shown in Example 1 returns information for all the centralized logging regions configured for use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsClsRegion -Identity "global/US"
```

In Example 2, information is returned only for the centralized logging region that has the Identity global/US.

### -------------------------- Example 3 --------------------------
```
Get-CsClsRegion -Filter "global/*"
```

Example 3 returns information about all the centralized logging regions configured at the global scope.
This is done by calling the Get-CsClsRegion cmdlet along with the Filter parameter; the filter value "global/*" limits the returned data to regions configured at the global scope.

### -------------------------- Example 4 --------------------------
```
Get-CsClsRegion | Where-Object {$_.OtherRegionAccess -match "Europe"}
```

The command shown in Example 4 returns information for all the centralized logging regions that allow access by the Europe region.
To carry out this task, the command first uses the Get-CsClsRegion cmdlet to return a collection of all the centralized logging regions currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those regions where the OtherRegionAccess property includes the string value "Europe".


## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return a centralized logging region (or regions).
For example, to return a collection of all the settings configured at the global scope, use this syntax:

`-Filter "global/*"`

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the centralized logging region to be returned.
A region identity consists of the scope where the region was created followed by the region name.
For example, to return a region named US created at the global scope, use the following syntax:

`-Identity "global/US"`

If this parameter is not specified then the Get-CsClsRegion cmdlet returns information about all your centralized logging regions.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

### Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Region#Decorated


## NOTES


## RELATED LINKS

[New-CsClsRegion](New-CsClsRegion.md)

[Remove-CsClsRegion](Remove-CsClsRegion.md)

[Set-CsClsRegion](Set-CsClsRegion.md)

