---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPMobileMessagingAccount
schema: 2.0.0
---

# Get-SPMobileMessagingAccount

## SYNOPSIS

Retrieves mobile messaging accounts for the specified Web application.



## SYNTAX

```
Get-SPMobileMessagingAccount [[-Identity] <SPMobileMessagingAccountPipeBind>]
 -WebApplication <SPWebApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPMobileMessagingAccount cmdlet retrieves the specified mobile messaging accounts for the specified Web application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE----------------- 
```
C:\PS>Get-SPMobileMessagingAccount -WebApplication http://sitename
```

This example retrieves the current mobile account settings information of the Web application http://sitename.

## PARAMETERS

### -Identity
Specifies whether to return either Short Message Service (SMS) or Multimedia Messaging Service (MMS) account information.
Valid values are:SMS and MMS.
If you do not specify this parameter, account information is returned for both SMS and MMS.

```yaml
Type: SPMobileMessagingAccountPipeBind
Parameter Sets: (All)
Aliases: ServiceType, AccountType
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Specifies the identity of the Web application to delete.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid Web application name (for example, WebApplication1212); or a valid name (for example, WebApp2423).

You either must specify WebApplication or must use the HostHeader switch and specify the full URL in the Identity parameter.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
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

