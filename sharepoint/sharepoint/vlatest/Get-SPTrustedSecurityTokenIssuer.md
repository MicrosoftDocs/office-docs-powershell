---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPTrustedSecurityTokenIssuer

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Get-SPTrustedSecurityTokenIssuer [[-Identity] <SPTrustedSecurityTokenServicePipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
Use the Get-SPTrustedSecurityTokenService cmdlet to return the trusted security token issuer by using the Identity parameter.
This cmdlet returns the T:Microsoft.SharePoint.Administration.Claims.SPSecurityTokenServiceManager object.
The properties on this object can be set by using the Set-SPTrustedSecurityTokenIssuer cmdlet and then updated back to the object.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------EXAMPLE---------- (SharePoint Server 2013)
```
C:\PS>Get-SPTrustedSecurityTokenService
```

This example displays all trusted security token service objects from the farm.

### -------------EXAMPLE---------- (SharePoint Server 2016)
```
C:\PS>Get-SPTrustedSecurityTokenService
```

This example displays all trusted security token service objects from the farm.

## PARAMETERS

### -Identity
Specifies the ID of the trusted security token issuer object that you want to return.
If you do not specify this parameter, the cmdlet returns all the objects.

```yaml
Type: SPTrustedSecurityTokenServicePipeBind
Parameter Sets: (All)
Aliases: 

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

[New-SPTrustedSecurityTokenIssuer]()

[Remove-SPTrustedSecurityTokenIssuer]()

[Set-SPTrustedSecurityTokenIssuer]()

