---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Revoke-SPObjectSecurity

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Revoke-SPObjectSecurity [-Identity] <SPObjectSecurity> [-Principal] <SPClaim> [[-Rights] <String[]>]
 [-AssignmentCollection <SPAssignmentCollection>]
```

### UNNAMED_PARAMETER_SET_2
```
Revoke-SPObjectSecurity [-Identity] <SPObjectSecurity> [-All] [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Revoke-SPObjectSecurity cmdlet to remove a security principal, such as a user, from a SPObjectSecurity object.
An SPObjectSecurity object is a common object that is used to represent the security access control list (ACL) of SharePoint administrative objects, in particular service applications.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
C:\PS>$security = Get-SPServiceApplicationSecurity $serviceApp -AdminRevoke-SPObjectSecurity $security "domain\user"Set-SPServiceApplicationSecurity $serviceApp -Admin $security
```

This example retrieves the SPObjectSecurity object corresponding to the administrator ACL on a service application, and removes a user from that ACL.
The removed an administrator for the service application $serviceApp.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$security = Get-SPServiceApplicationSecurity $serviceApp -Admin
Revoke-SPObjectSecurity $security "domain\user"
Set-SPServiceApplicationSecurity $serviceApp -Admin $security
```

This example retrieves the SPObjectSecurity object corresponding to the administrator ACL on a service application, and removes a user from that ACL.
The removed an administrator for the service application $serviceApp.

## PARAMETERS

### -Identity
Specifies the SPObjectSecurity object from which the security principal is removed.
You can use the Get-SPServiceApplicationSecurity cmdlet to get a SPObjectSecurity object .

```yaml
Type: SPObjectSecurity
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Principal
Specifies the principal for whom the rights are removed.

The type must a valid name a principal; for example, Full Control.

```yaml
Type: SPClaim
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rights
Specifies the rights of the principal to revoke.

The type must a valid array of strings that represents the rights of the principal to revoke.

```yaml
Type: String[]
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -All
Specifies that all security principals are removed from the specified SPObjectSecurity object.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: False
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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

