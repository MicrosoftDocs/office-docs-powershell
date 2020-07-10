---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-managedcontentsettings
applicable: Exchange Server 2010
title: Get-ManagedContentSettings
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010"
---

# Get-ManagedContentSettings

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Get-ManagedContentSettings cmdlet to retrieve managed content settings associated with managed folders.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### FolderName
```
Get-ManagedContentSettings [-FolderName <ELCFolderIdParameter>]
 [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>]
 [<CommonParameters>]
```

### Identity
```
Get-ManagedContentSettings [[-Identity] <ELCContentSettingsIdParameter>]
 [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-ManagedContentSettings cmdlet retrieves from one to all of the managed content settings. You can also retrieve only the managed content settings associated with a specified managed folder.

If only the Identity parameter is present, the folder content settings and all associated attributes are returned. If the Identity parameter isn't present, the command returns all content settings. If the FolderName parameter is present, the command returns all content settings contained in the specified managed folder and all the attributes of each setting.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ManagedContentSettings | Format-List
```

This example uses the Get-ManagedContentSettings cmdlet without parameters to obtain all managed content settings. The output of the Get-ManagedContentSettings cmdlet is piped to the Format-List cmdlet so that all the available information is displayed in the result.

### Example 2
```powershell
Get-ManagedContentSettings -Identity "Inbox Settings"
```

This example retrieves the managed content settings Inbox Settings.

### Example 3
```powershell
Get-ManagedContentSettings -FolderName "Inbox"
```

This example retrieves the managed content settings for the managed folder Inbox.

## PARAMETERS

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderName
The FolderName parameter specifies the name or GUID of the managed folder to which the managed content settings apply. When used, this command retrieves all the policies that apply to that folder.

This parameter can't be used with the Identity parameter.

```yaml
Type: ELCFolderIdParameter
Parameter Sets: FolderName
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the name, distinguished name (DN), or GUID of the set of managed content settings. When used, this command retrieves the folder content settings and all associated attributes.

This parameter can't be used with the FolderName parameter.

```yaml
Type: ELCContentSettingsIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Organization
This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
