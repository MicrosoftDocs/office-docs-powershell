---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Get-SPWebTemplate
schema: 2.0.0
---

# Get-SPWebTemplate

## SYNOPSIS

Displays all globally installed site templates that match the given identity.



## SYNTAX

```
Get-SPWebTemplate [[-Identity] <SPWebTemplatePipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-CompatibilityLevel <UInt32>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPWebTemplate cmdlet displays all installed site templates that match the full or partial identity that was given.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- 
```
C:\PS>$template = Get-SPWebTemplate "STS#0"

C:\PS>New-SPSite http://contoso.com -OwnerAlias "DOMAIN\JDOE" -Template $template
```

This example creates a site collection by using the team site Web template (ID=STS#0).

### --------------EXAMPLE 2----------------- 
```
C:\PS>Get-SPWebTemplate "STS*"
```

This example displays basic information about all the STS templates.

## PARAMETERS

### -Identity
Specifies the name of the Web template to display.

The type must be the ID or full or partial name of the Web template.

```yaml
Type: SPWebTemplatePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CompatibilityLevel
Specifies the version of templates to use when creating a new SPSite object.
This value sets the initial CompatibilityLevel value for the site collection.
The values for this parameter can be either SharePoint Server or SharePoint Server.
When this parameter is not specified, the CompatibilityLevel will default to the highest possible version for the Web application depending on the SiteCreationMode setting

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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

