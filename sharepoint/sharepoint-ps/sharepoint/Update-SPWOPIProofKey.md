---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Update-SPWOPIProofKey

## SYNOPSIS
Updates the public key that is used to connect to the WOPI application on the current SharePoint farm where this cmdlet is run.


## SYNTAX

```
Update-SPWOPIProofKey [-AssignmentCollection <SPAssignmentCollection>] [-ServerName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The `Update-SPWOPIProofKey` cmdlet updates the public key that is used to connect to the WOPI application (which could be a server that runs Office Web Apps Server) on the current SharePoint farm where this cmdlet is run.
You may want to use this cmdlet if the keys become unsynchronized between the SharePoint farm and the WOPI application.
If the keys are unsynchronized, documents may not open in the browser and messages such as "Invalid Proof Signature for file…" or "Invalid Proof Signature for folder..." are found in the Unified Logging System (ULS) logs.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE-----------------
```
C:\PS>Update-SPWOPIProofKey -ServerName "Server.corp.Contoso.com"
```

This example obtains the current public key from the WOPI application (such as a server that runs Office Web Apps Server) and updates the key that is stored on the SharePoint farm.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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

### -ServerName
Specifies the WOPI application to obtain the key from.
This may be a server that runs Office Web Apps Server.
If this parameter is missing, public keys for all WOPI applications which are connected to the current SharePoint farm, are updated.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
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

[Content roadmap for Office Web Apps]()

[Use Office Web Apps with SharePoint 2013]()
