---
applicable: Exchange Server 2010
schema: 2.0.0
---

# Get-ManagedContentSettings

## SYNOPSIS
Use the Get-ManagedContentSettings cmdlet to retrieve managed content settings associated with managed folders.

## SYNTAX

### Set2
```
Get-ManagedContentSettings [-DomainController <Fqdn>] [-FolderName <ELCFolderIdParameter>]
 [-Organization <OrganizationIdParameter>] [<CommonParameters>]
```

### Set1
```
Get-ManagedContentSettings [[-Identity] <ELCContentSettingsIdParameter>] [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The Get-ManagedContentSettings cmdlet retrieves from one to all of the managed content settings. You can also retrieve only the managed content settings associated with a specified managed folder.

If only the Identity parameter is present, the folder content settings and all associated attributes are returned. If the Identity parameter isn't present, the command returns all content settings. If the FolderName parameter is present, the command returns all content settings contained in the specified managed folder and all the attributes of each setting.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Messaging records management" entry in the Messaging Policy and Compliance Permissions topic.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-ManagedContentSettings | Format-List
```

This example uses the Get-ManagedContentSettings cmdlet without parameters to obtain all managed content settings. The output of the Get-ManagedContentSettings cmdlet is piped to the Format-List cmdlet so that all the available information is displayed in the result.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-ManagedContentSettings -Identity "Inbox Settings"
```

This example retrieves the managed content settings Inbox Settings.

### Example 3 -------------------------- (Exchange Server 2010)
```
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
Parameter Sets: Set2
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Organization
The Organization parameter is reserved for internal Microsoft use.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/08082cfe-b820-493e-bddd-a0befb465972.aspx)

