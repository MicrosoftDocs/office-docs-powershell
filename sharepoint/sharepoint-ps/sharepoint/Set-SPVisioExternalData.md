---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPVisioExternalData

## SYNOPSIS
Configures settings related to external data connections for a Visio Services application.

## SYNTAX

```
Set-SPVisioExternalData -UnattendedServiceAccountApplicationID <String>
 -VisioServiceApplication <SPVisioServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-SPVisioExternalData cmdlet sets and configures settings for external data connections for the Visio Services application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------------EXAMPLE----------------------- (SharePoint Server 2013)
```
C:\PS>Set-SPVisioExternalData -VisioServiceApplication "VGS1" -UnattendedServiceAccountApplicationID "SSSApp1"
```

This example sets the unattended service account application ID to SSSApp1 for the Visio Services application named VGS1.

### --------------------EXAMPLE----------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPVisioExternalData -VisioServiceApplication "VGS1" -UnattendedServiceAccountApplicationID "SSSApp1"
```

This example sets the unattended service account application ID to SSSApp1 for the Visio Services application named VGS1.

## PARAMETERS

### -UnattendedServiceAccountApplicationID
Specifies the target application ID in the registered secure store service that is used to reference unattended service account credentials.
The unattended service account is a single account that all documents can use to refresh data.
It is required when connecting to external data sources.

The type must be a valid value less than or equal to 256 characters.
The application ID must be registered in the secure store service application or an error message will be displayed.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VisioServiceApplication
Specifies the Visio Services application that contains the SPVisioExternalData object.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Visio Services application (for example, MyVisioService1); or an instance of a valid SPVisioServiceApplication object.

```yaml
Type: SPVisioServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

