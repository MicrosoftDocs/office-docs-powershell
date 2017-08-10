---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsClsRegion

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Removes one or more centralized logging configuration regions.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
Centralized logging regions are intended for use with Lync Online Preview.

**Below Content Applies To:** Skype for Business Server 2015

Removes one or more centralized logging configuration regions.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
Centralized logging regions are intended for use with Skype for Business Online.



## SYNTAX

```
Remove-CsClsRegion [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Microsoft Lync Server 2013 Preview.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using Windows PowerShell and the Search-CsClsLogging cmdlet.

With the Office 365 version of Lync Server, regions are used to determine which users have access to the personally-identifiable information that is written to the log files.
Regions are created by using the New-CsClsRegion cmdlet and then are added to a collection of centralized logging configuration settings.
Regions added to one of these collections can later be removed by using the Remove-CsClsRegion cmdlet.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsClsRegion"}

Lync Server Control Panel: The functions carried out by the Remove-CsClsRegion cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server 2015.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

With Skype for Business Online, regions are used to determine which users have access to the personally-identifiable information that is written to the log files.
Regions are created by using the New-CsClsRegion cmdlet and then are added to a collection of centralized logging configuration settings.
Regions added to one of these collections can later be removed by using the Remove-CsClsRegion cmdlet.

Skype for Business Server Control Panel: The functions carried out by the Remove-CsClsRegion cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 removes the centralized logging region that has the Identity global/US.

Remove-CsClsRegion -Identity "global/US"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 removes the centralized logging region that has the Identity global/US.

Remove-CsClsRegion -Identity "global/US"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the centralized logging regions configured at the global scope are removed.
To do this, the command first calls Get-CsClsRegion along with the Filter parameter; the filter value "global/*" limits the returned data to regions configured at the global scope.
These regions are then piped to, and deleted by, the Remove-CsClsRegion cmdlet.

Get-CsClsRegion -Filter "global/*" | Remove-CsClsRegion

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the centralized logging regions configured at the global scope are removed.
To do this, the command first calls the Get-CsClsRegion cmdlet along with the Filter parameter; the filter value "global/*" limits the returned data to regions configured at the global scope.
These regions are then piped to, and deleted by, the Remove-CsClsRegion cmdlet.

Get-CsClsRegion -Filter "global/*" | Remove-CsClsRegion

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes all the centralized logging regions that have the security group suffix EMEA.
To carry out this task, the command first calls Get-CsClsRegion without any parameters; this returns a collection of all the centralized logging regions configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those regions where the SecurityGroupSuffix property is equal to (-eq) EMEA.
That subcollection of regions is then piped to the Remove-CsCls cmdlet, which deletes each region in the subcollection.

Get-CsClsRegion | Where-Object {$_.SecurityGroupSuffix -eq "EMEA" | Remove-CsClsRegion

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes all the centralized logging regions that have the security group suffix EMEA.
To carry out this task, the command first calls the Get-CsClsRegion cmdlet without any parameters; this returns a collection of all the centralized logging regions configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those regions where the SecurityGroupSuffix property is equal to (-eq) EMEA.
That subcollection of regions is then piped to the Remove-CsClsRegion cmdlet, which deletes each region in the subcollection.

Get-CsClsRegion | Where-Object {$_.SecurityGroupSuffix -eq "EMEA" | Remove-CsClsRegion

## PARAMETERS

### -Identity
Unique identifier for the centralized logging region to be removed.
A region identity consists of the scope where the region was created followed by the region name.
For example, to delete a region named US created at the global scope, use the following syntax:

-Identity "global/US"

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Remove-CsClsRegion accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Region#Decorated object.

###  
The Remove-CsClsRegion cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Region#Decorated object.

## OUTPUTS

###  
None.
Instead, Remove-CsClsRegion deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Region#Decorated object.

###  
None.
Instead, the Remove-CsClsRegion cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Region#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsClsRegion]()

[New-CsClsRegion]()

[Set-CsClsRegion]()

[Online Version](http://technet.microsoft.com/EN-US/library/6ab1596e-0e27-44e7-8cbc-efd4064ba58b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6ab1596e-0e27-44e7-8cbc-efd4064ba58b(OCS.16).aspx)

