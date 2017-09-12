---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPWOPIZone

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Configures the zone that the current SharePoint farm will use to navigate the browser to the WOPI application.



## SYNTAX

```
Set-SPWOPIZone [[-Zone] <String>] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-SPWOPIZone cmdlet configures the zone that the current SharePoint farm will use to navigate the browser to the WOPI application (such as a server that runs Office Web Apps Server).
The SharePoint Server page in the browser creates a frame that contains a page on the WOPI application.
The zone for the URL of the WOPI application page is determined by this setting.

If you do not set the zone, the default is "internal-HTTPS." If you select a zone that is not supported by the WOPI application, Office Web Apps will not work.
Only use HTTP when you are on a fully secure network that uses IPSEC (full encryption) or in a test environment that does not contain sensitive data.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE----------------- (SharePoint Server 2013)
```
C:\PS>Set-SPWOPIZone -Zone "external-https"
```

This example configures the current SharePoint farm to use external connections through HTTPS to the WOPI application (such as a server that runs Office Web Apps Server).

### --------------EXAMPLE----------------- (SharePoint Server 2016)
```
C:\PS>Set-SPWOPIZone -Zone "external-https"
```

This example configures the current SharePoint farm to use external connections through HTTPS to the WOPI application (such as a server that runs Office Web Apps Server).

## PARAMETERS

### -Zone
Specifies the zone.
For a list of zones that the WOPI application supports, run Get-SPWOPIBinding.

If you have a SharePoint farm that's internal and external, specify external.
If you have a SharePoint farm that's internal only, specify internal.
Only use HTTP when you are on a fully secure network that uses IPSEC (full encryption) or in a test environment that does not contain sensitive data.
The options are as follows:

- Internal-HTTP
- Internal-HTTPS
- External-HTTP
- External-HTTPS

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
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
For more information, type the following command: get-help about_commonparameters.

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
For more information, type the following command: get-help about_commonparameters.

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

[Content roadmap for Office Web Apps]()

[Use Office Web Apps with SharePoint 2013]()

[Get-SPWOPIZone]()

