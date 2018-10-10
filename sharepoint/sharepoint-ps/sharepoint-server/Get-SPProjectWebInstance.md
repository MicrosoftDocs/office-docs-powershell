---
external help file: 
applicable: Project Server 2013, Project Server 2016, Project Server 2019
title: Get-SPProjectWebInstance
schema: 2.0.0
---

# Get-SPProjectWebInstance

## SYNOPSIS
Returns an instance of a Project Web App site.

## SYNTAX

```
Get-SPProjectWebInstance [-ServiceApplication <PsiServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Url <Uri>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPProjectWebInstance cmdlet returns an instance of a Project Web App site, including the following information:

- ID (GUID)
- Service application name
- Parent web app
- Project Web App URL
- Locale identifier (LCID)
- Admin account
- Project Web App database server
- Database name for the Project Web App database
- Provisioning status
- Report center status
- Site ID (GUID)

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### ----------------------EXAMPLE----------------------- 
```
PS C:\>Get-SPProjectWebInstance -Url http://server/pwa
```

This example returns the properties for a Project Web App instance at http://server/pwa.

## PARAMETERS

### -ServiceApplication
Specifies the name of the Project Server service application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Project Web App instance (for example, ProjectWebApp1); or an instance of a valid PsiServiceApplication object.

```yaml
Type: PsiServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: sa
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
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
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Url
Specifies the URL of the Project Web App instance to get.

The type must be a valid URL, in the form http://\<server_name\>/\<PWA_name\>.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

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

