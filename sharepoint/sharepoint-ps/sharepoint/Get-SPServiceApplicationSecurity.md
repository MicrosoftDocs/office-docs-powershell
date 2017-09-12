---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPServiceApplicationSecurity

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Returns the SPObjectSecurity object for a service application.



## SYNTAX

```
Get-SPServiceApplicationSecurity [-Identity] <SPServiceApplicationPipeBind> [-Admin]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPServiceApplicationSecurity cmdlet returns a security object for the specified service application.
Use this cmdlet with the Grant-SPObjectSecurity and Set-SPServiceApplicationSecurity cmdlets to manage security for a service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
C:\PS>$security = Get-SPServiceApplicationSecurity $serviceApp -AdminGrant-SPObjectSecurity $security $principal "Full Control"Set-SPServiceApplicationSecurity $serviceApp -Admin $security
```

This example retrieves the SPObjectSecurity object corresponding to the administrator ACL on a service application, and adds a new user principal to that ACL.
The new user is an administrator for the service application $serviceApp.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$security = Get-SPServiceApplicationSecurity $serviceApp -Admin
Grant-SPObjectSecurity $security $principal "Full Control"
Set-SPServiceApplicationSecurity $serviceApp -Admin $security
```

This example retrieves the SPObjectSecurity object corresponding to the administrator ACL on a service application, and adds a new user principal to that ACL.
The new user is an administrator for the service application $serviceApp.

## PARAMETERS

### -Identity
Specifies the service application to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a service application (for example, SearchServiceApp1); or an instance of a valid SPServiceApplication object.

```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Admin
Returns the access control list (ACL) that contains the administrators list of the service application.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

