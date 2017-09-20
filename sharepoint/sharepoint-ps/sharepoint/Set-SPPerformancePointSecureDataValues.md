---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPPerformancePointSecureDataValues

## SYNOPSIS
Sets global settings for the unattended service account.

## SYNTAX

```
Set-SPPerformancePointSecureDataValues
 [-ServiceApplication] <SPPerformancePointMonitoringServiceApplicationPipeBind>
 -DataSourceUnattendedServiceAccount <PSCredential> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Set-SPPerformancePointSecureDataValues cmdlet sets global settings and properties for the unattended service account.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------------EXAMPLE 1-------------------- (SharePoint Server 2013)
```
C:\PS>Set-SPPerformancePointSecureDataValues -ServiceApplication "PerformancePoint Service Application" -DataSourceUnattendedServiceAccount (get-credential)
```

This example shows how to set the unattended service account by prompting the user for the user name and password.

### --------------------EXAMPLE 1-------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPPerformancePointSecureDataValues -ServiceApplication "PerformancePoint Service Application" -DataSourceUnattendedServiceAccount (get-credential)
```

This example shows how to set the unattended service account by prompting the user for the user name and password.

### --------------------EXAMPLE 2-------------------- (SharePoint Server 2013)
```
C:\PS>Set-SPPerformancePointSecureDataValues -ServiceApplication "PerformancePoint Service Application" -DataSourceUnattendedServiceAccount (New-Object System.Management.Automation.PSCredential "domain\user", (ConvertTo-SecureString "password" -AsPlainText -Force))
```

This example shows how to pass the user name and password as parameters to the cmdlet.

The DataSourceUnattendedServiceAccount parameter accepts a PSCredential object.
Therefore, to pass in this value as a parameter, a new PSCredential object must be created using the desired username and password values.
The PSCredential object requires that the password be given as a SecureString type.

### --------------------EXAMPLE 2-------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPPerformancePointSecureDataValues -ServiceApplication "PerformancePoint Service Application" -DataSourceUnattendedServiceAccount (New-Object System.Management.Automation.PSCredential "domain\user", (ConvertTo-SecureString "password" -AsPlainText -Force))
```

This example shows how to pass the user name and password as parameters to the cmdlet.

The DataSourceUnattendedServiceAccount parameter accepts a PSCredential object.
Therefore, to pass in this value as a parameter, a new PSCredential object must be created using the desired username and password values.
The PSCredential object requires that the password be given as a SecureString type.

## PARAMETERS

### -ServiceApplication
Specifies the PerformancePoint Service application that is to be configured.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a PerformancePoint Service application (for example, PerfPointApp1); or an instance of a valid SPPerformancePointServiceApplication object.

```yaml
Type: SPPerformancePointMonitoringServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -DataSourceUnattendedServiceAccount
Specifies the user credentials (user name and password) for the data source of the unattended service account.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

